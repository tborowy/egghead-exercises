/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        input: {
            seller: element.bind(null, by.id('seller')), name: element.bind(null, by.id('name')), count: element.bind(null, by.id('count'))
        }, welcomeSeller: element.bind(null, by.id('welcomeSeller')), order: element.bind(null, by.id('order')), heading: element.bind(null, by.css('h1'))

    };

    return byString(mapping, text);
};

module.exports = fragments;
