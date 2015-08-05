(function ()
{
    'use strict';

    var app = angular.module('app', ['ngRoute']);

    // add routing here

    app.controller('homeCtrl', function ($scope)
    {
        $scope.$root.condition = true;
        $scope.car = {brand: 'Ferrari', capacity: 3.5};
    });

    app.controller('routeCtrl', function ($scope, $routeParams)
    {
        $scope.$root.condition = true;
        $scope.brand = $routeParams.brand;
        $scope.capacity = $routeParams.capacity;
    });
})();
