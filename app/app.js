'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider.when('/', {
        templateUrl: 'views/home.html', controller: 'chooseCtrl'
    });
    $routeProvider.when('/container', {
        templateUrl: 'views/container.html', controller: 'chooseCtrl'
    });
    $routeProvider.when('/components', {
        templateUrl: 'views/components.html', controller: 'chooseCtrl'
    });

    $routeProvider.otherwise('/');
});

app.controller('chooseCtrl', function ($scope)
{
    $scope.name = {};
    var index = 2;
    $scope.list = [1];
    $scope.add = function ()
    {
        $scope.list.push(index);
        index++;
    };
});

app.directive('myContainer', function ()
{
    return {
        restrict: 'E', transclude: true, scope: {
            name: '@'
        }, template: '<div class="my-container text-center">\n    <div class="alert-info"> {{name}}</div>\n    <div ng-transclude></div>\n</div>'
    };
});
app.directive('myComponent', function ()
{
    return {
        restrict: 'E', scope: {
            name: '@'
        }, template: '<div class="text-center my-components">\n    <div>{{name}}</div>\n</div>'
    };
});
