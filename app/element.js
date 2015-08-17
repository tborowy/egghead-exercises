'use strict';

var element = angular.module('elementApp', []);

element.directive('findElement', function ()
{

    //create link function
    var link = function (scope)
    {
        //watch changes on input

    };

    return {
        replace: true,
        template: '<div> <input class="form-control" type="text" ng-model="input" placeholder="Write circle or square"></div>',
        compile: function (templateElement)
        {

            //return link function
        }
    };
});

