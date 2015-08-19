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
            success: element.bind(null, by.css('#success')), unSuccess: element.bind(null, by.css('#unSuccess'))
        }, button: {
            display: element.bind(null, by.css('#display')),
            success: element.bind(null, by.css('#successButton')),
            unSuccess: element.bind(null, by.css('#unSuccessButton'))
        }, message: {
            success: element.bind(null, by.binding('appCtrl.success')),
            unSuccess: element.bind(null, by.binding('unSuccessCtrl.unSuccess'))
        }
    };

    return byString(mapping, text);
};

module.exports = fragments;
