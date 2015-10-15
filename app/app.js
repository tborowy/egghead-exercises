(function ()
{
    'use strict';

    var app = angular.module('app', []);

    //add routing

    app.controller('RouteCtrl', function ($scope)
    {
        $scope.$root.condition = true;
        this.buttonName = 'Click to show!';

        this.display = function ()
        {
            this.message = this.message ? '' : 'I came from a RouteCtrl';
            this.buttonName = this.message === '' ? 'Click to show!' : 'Click to hide!';

        };
        $scope.routing = this;
    });
})();
