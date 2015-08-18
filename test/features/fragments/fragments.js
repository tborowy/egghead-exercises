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
        author: element.bind(null, by.binding('song.author')),
        title: element.bind(null, by.binding('song.title')),
        showSongButton: element.bind(null, by.id('showSong')),
        showFakeButton: element.bind(null, by.id('showFake')),
        songFragment: element.bind(null, by.id('songFragment')),
        fakeFragment: element.bind(null, by.id('fakeFragment'))

    };
    return byString(mapping, text);
};

module.exports = fragments;
