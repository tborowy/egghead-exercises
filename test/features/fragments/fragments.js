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
        myContainer: element.bind(null, by.css('my-container')),
        myContainerName: element.bind(null, by.css('my-container div div')),
        myContainerContent: element.bind(null, by.css('my-container my-component')),
        myComponent: element.bind(null, by.css('my-component')),
        containerButton: element.bind(null, by.id('containerButton')),
        componentButton: element.bind(null, by.id('componentButton')),
        addComponentButton: element.bind(null, by.css('#addComponentButton')),
        addComponentToContainerButton: element.bind(null, by.css('#addComponentToContainerButton')),
        components: element.all.bind(null, by.css('my-component')),
        containerComponents: element.all.bind(null, by.css('my-container my-component'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
