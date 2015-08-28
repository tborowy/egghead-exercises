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
        button: {
            left: element.bind(null, by.id('left')), right: element.bind(null, by.id('right'))
        }, alert: {
            info: element.bind(null, by.css('.alert-info')),
            danger: element.bind(null, by.css('.alert-danger')),
            success: element.bind(null, by.css('.alert-success'))
        }, error: element.bind(null, by.css('error'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
