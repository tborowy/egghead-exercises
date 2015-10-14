(function ()
{
    'use strict';
    var app = angular.module('app', []);

    app.directive('url', function ()
    {
        return {
            restrict: 'E',
            scope: {
                title: '@',
                data: '@'
            },
            template: '<div class="container"><button id="button" ng-click="content()" class="btn btn-info" ng-if="isTitleVisible(title)">{{title}}</button><div ng-if="isContentVisible"><h3 ng-if="\'secret\'!==title">{{data}}</h3><h3 ng-if="\'secret\'===title" class="text-success">Good work! You display this secret!</h3></div></div>',
            link: function (scope)
            {
                scope.isTitleVisible = function (value)
                {
                    return !(!value || 0 === value.length);
                };
                scope.content = function ()
                {
                    scope.isContentVisible = !scope.isContentVisible;
                };
            }
        };
    });
})();
