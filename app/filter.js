(function ()
{
    'use strict';

    var myFilter = angular.module('myFilter', []);

    myFilter.controller('FilterCtrl', function ($scope)
    {
        $scope.data = {
            citation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: 'The Hobbit: The Battle of the Five Armies',
            someText: 'Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories.'
        };
    });

    myFilter.filter('star', function ()
    {
        return function (text)
        {
            return '*' + text + '*';
        };
    });

    myFilter.filter('withoutSpace', function ()
    {
        return function (text)
        {
            return text.split(' ').join('');
        };
    });

    myFilter.filter('onlyFirstLetterUp', function ()
    {
        return function (text)
        {
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        };
    });


})();
