(function ()
{
    'use strict';

    var scaryApp = angular.module('scaryApp', []);

    scaryApp.controller('GhostCtrl', function ()
    {
        var ctrl = this;
        ctrl.isShownGhost = {first: false, second: false, third: false};

        ctrl.showGhost = function (ghost)
        {
            ctrl.isShownGhost[ghost] = !ctrl.isShownGhost[ghost];
        };
    });
})();
