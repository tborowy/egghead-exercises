(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    // add routing

    app.controller('homeCtrl', function ($scope)
    {
        $scope.car = {brand: 'Ferrari', capacity: 3.5};
    });

    app.controller('routeCtrl', function ($scope, $routeParams)
    {
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();
