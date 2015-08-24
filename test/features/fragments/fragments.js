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
                navigation: {
                    start: element.bind(null, by.css('a[ui-sref="start"]')),
                    verticalPaintings: element.bind(null, by.css('a[ui-sref="vPaintings"]')),
                    horizontalPaintings: element.bind(null, by.css('a[ui-sref="hPaintings"]'))
                }, image: {
                    horizontalList: element.all.bind(null, by.repeater('hPainting in paintingList')),
                    verticalList: element.all.bind(null, by.repeater('vPainting in paintingList'))
                }, welcomeJumbotron: {
                    h1: element.bind(null, by.css('div[class~="jumbotron"] h1')), p: element.bind(null, by.css('div[class~="jumbotron"] p'))
                },
                painingDetails : {
                    title: element.bind(null, by.binding('detail.title')),
                    author: element.bind(null, by.binding('detail.author')),
                    location: element.bind(null, by.binding('detail.location')),
                    date: element.bind(null, by.binding('detail.date'))
                }
            };

            return byString(mapping, text);
        };

module.exports = fragments;
