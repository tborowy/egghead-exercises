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
        songs: {
            table: element.bind(null, by.id('songs')),
            artist: element.bind(null, by.css('#songs td:nth-of-type(1)')),
            title: element.bind(null, by.css('#songs td:nth-of-type(2)')),
            year: element.bind(null, by.css('#songs td:nth-of-type(3)'))
        }, favouriteSongs: {
            table: element.bind(null, by.id('favouriteSongs')),
            artist: element.bind(null, by.css('#favouriteSongs td:nth-of-type(1)')),
            title: element.bind(null, by.css('#favouriteSongs td:nth-of-type(2)'))
        }, button: {
            add: element.bind(null, by.id('add')), clear: element.bind(null, by.id('clear'))
        }, input: {
            artist: element.bind(null, by.id('artist')), title: element.bind(null, by.id('title'))
        }, message: element.bind(null, by.id('notification'))
    };

    return byString(mapping, text);
};

module.exports = fragments;
