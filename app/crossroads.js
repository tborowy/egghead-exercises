'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'views/crossroads.html', controller: 'CrossroadsCtrl'

    }).when('/error', {
        resolve: {
            loadData: app.error
        }
    }).when('/success', {
        templateUrl: 'views/rightWay.html', controller: function ($scope)
        {
            // success message

        }, resolve: {
            loadData: app.success
        }
    });
});

app.directive('error', function ()
{
    return {
        restrict: 'E', template: '<div class="text-center alert {{alertColor}}">{{alertMessage}}</div>', link: function (scope)
        {
            //complete error directive
        }
    };
});

var CrossroadsCtrl = app.controller('CrossroadsCtrl', function ($scope, $interval)
{
    $scope.alertMessage = 'Hello, where would you like to go?';
    $scope.alertColor = 'alert-info';

    $scope.animate = function ()
    {
        $scope.alertMessage = '';
        $interval(function ()
        {
            $scope.alertMessage += '. ';
        }, 100, 10);
    };
});


CrossroadsCtrl.error = function ()
{

};

CrossroadsCtrl.success = function ()
{

};
