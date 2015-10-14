(function ()
{
    'use strict';
    var app = angular.module('app', []);

    app.run(function ()
    {
        //put templates to $templateCache
        var template = [];
        template[0] = '<div id="default"><div>Default template:</div><h3 id="defaultContent">{{order}} x {{quantity}}</h3></div>';
        template[1] =
                '<div id="button"><div>Button template:</div><div><h3 ng-click="content()" id="buttonTemplate" class="btn btn-default">' +
                'Click to see the order</h3><div ng-if="isContentVisible"><h3 id="buttonContent" class="form-group">' +
                'Your order: {{quantity}} {{order}}</h3></div></div></div';
        template[2] =
                '<div id="table"><h4>Table template:</h4><table id="tableContent" class="table table-bordered"><thead><tr>' +
                '<th class="text-center">Order</th><th class="text-center">Quantity</th></tr></thead>' +
                '<tbody><tr><td>{{order}}</td><td>{{quantity}}</td></tr></tbody></table></div>';
    });

    app.controller('urlCtrl', function ($scope)
    {
        $scope.order = 'pizza';
        $scope.quantity = 12;

    });
    app.directive('url', function ($compile)
    {
        var link = function (scope, element)
        {
            //watch input change
            scope.$watch(function ()
            {

            }, function ()
            {

                $compile(element.contents())(scope);
            });
            scope.isContentVisible = false;

            scope.content = function ()
            {
                scope.isContentVisible = !scope.isContentVisible;
            };
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                order: '@',
                quantity: '@'
            },
            link: link
        };
    });
})();
