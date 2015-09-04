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
        bus: {
            input: element.bind(null, by.css('#via')),
            button: element.all.bind(null, by.css('#viaButton')),
            table: element.bind(null, by.css('#busTable')),
            start: element.bind(null, by.css('#busTable td:nth-of-type(1)')),
            via: element.bind(null, by.css('#busTable td:nth-of-type(2)')),
            stop: element.bind(null, by.css('#busTable td:nth-of-type(3)')),
            departure: element.bind(null, by.css('#busTable td:nth-of-type(4)'))
        }, train: {
            input: element.bind(null, by.css('#delay')),
            button: element.all.bind(null, by.css('#delayButton')),
            table: element.bind(null, by.css('#trainTable')),
            start: element.bind(null, by.css('#trainTable td:nth-of-type(1)')),
            stop: element.bind(null, by.css('#trainTable td:nth-of-type(2)')),
            departure: element.bind(null, by.css('#trainTable td:nth-of-type(3)')),
            delay: element.bind(null, by.css('#trainTable td:nth-of-type(4)'))
        }, flight: {
            button: element.all.bind(null, by.css('#cancelButton')),
            table: element.bind(null, by.css('#flightTable')),
            airline: element.bind(null, by.css('#flightTable td:nth-of-type(1)')),
            destination: element.bind(null, by.css('#flightTable td:nth-of-type(2)')),
            scheduled: element.bind(null, by.css('#flightTable td:nth-of-type(3)'))
        }
    };

    return byString(mapping, text);
};

module.exports = fragments;
