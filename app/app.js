'use strict';
var app = angular.module('app', []);

app.controller('AppCtrl', function ()
{

    var ctrl = this;
    ctrl.favouriteSong = {artist: 'Ed Sheeran', title: 'I see fire'};
    ctrl.favouriteSongsList = [];
    ctrl.songs = [];


    var refreshSongs = function ()
    {
        // get all songs
    };

    ctrl.addFavouriteSong = function (favouriteSong)
    {
        if (favouriteSong.artist && favouriteSong.title) {

            // add favourite song

        } else {
            ctrl.message = 'You did not specify artist or title!';
        }
    };

    ctrl.removeFavouriteSongs = function ()
    {
        // remove favourite song list

    };
});
