(function ()
{
    'use strict';

    var app = angular.module('app', []);

    app.controller('AppCtrl', ['$scope', function ($scope)
    {
        $scope.description = {
            element: {
                name: 'E', call: 'this directive use restrict E'
            }, attribute: {
                name: 'A', call: 'this directive use restrict A'
            }, class: {
                name: 'C', call: 'this directive use restrict C'
            }
        };
    }]);

})();
