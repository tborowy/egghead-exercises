(function () {
    'use strict';
    angular.module('countryStateCity').directive('country', function () {
        return {
            //complete country directive
            restrict: 'E',
            scope: {},
            controller: 'countryCtrl as countryCtrl',
            templateUrl: 'templates/country.tpl.html'
        };
    });
})();
