(function ()
{
    'use strict';
    var app = angular.module('app', []);

//add quote filter
//add withoutH filter
//add firstLetterUp filter

    app.controller('FilterCtrl', function ($scope)
    {
        $scope.data = {
            citation: 'To be, or not to be...',
            title: 'The Hobbit: The Battle of the Five Armies',
            someText: 'Visit News for up-to-the-minute news, breaking news, video, audio and stories.'
        };
    });
})();
