(function ()
{
    'use strict';

    var app = angular.module('app', []);

    app.service('Calculator', function ()
    {
        this.addition = function (a, b)
        {
            return a + b;
        };

        this.subtraction = function (a, b)
        {
            return a - b;
        };

        this.multiplication = function (a, b)
        {
            return a * b;
        };

        this.division = function (a, b)
        {
            return 0 !== b ? a / b : false;
        };
    });
})();
