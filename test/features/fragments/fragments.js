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
        smallBox: element.bind(null, by.css('box[size="50px"][color][open]')),
        mediumBox: element.bind(null, by.css('box[size="70px"][color][open]')),
        bigBox: element.bind(null, by.css('box[size="90px"][color][open]')),
        name: element.all.bind(null, by.id('name')),
        panelName: element.all.bind(null, by.id('panelName')),
        color: element.all.bind(null, by.css('select[ng-model="color"]')),
        size: element.all.bind(null, by.binding('size')),
        square: element.all.bind(null, by.css('.square')),
        button: element.all.bind(null, by.id('button'))

    };
    return byString(mapping, text);
};

module.exports = fragments;
