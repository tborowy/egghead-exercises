'use strict';

var songApp = angular.module('songApp', []);

songApp.factory('Song', function ()
{
    songApp.factory('Song', function ()
    {
        return {
            author: 'Gotye feat. Kimbra',
            title: 'Somebody That I Used To Know',
            sing: 'But you did not have to cut me off... But you treat me like a stranger ...',
            fake: 'Buuuuuuuuuuuuuut you niah niah blah bla ...'
        };
    });
});

songApp.controller('SongCtrl', function (Song)
{

    var ctrl = this;
    ctrl.showSongText = function ()
    {
        ctrl.showSing = true;
        ctrl.showFake = false;
    };

    ctrl.showFakeText = function ()
    {
        ctrl.showSing = false;
        ctrl.showFake = true;
    };

    ctrl.author = Song.author;
    ctrl.title = Song.title;
    ctrl.sing = Song.sing;
    ctrl.fake = Song.fake;
});
