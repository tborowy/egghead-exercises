var myApp = angular.module("myApp", []);

myApp.directive("change", function ()
{
    return {
        scope: {
            change: '='
        },
        link: function (scope, element)
        {
            element.bind("dblclick", function ()
            {
                scope.change.firstName = scope.change.firstName.toUpperCase();
                scope.change.lastName = scope.change.lastName.toLowerCase();
                scope.change.age = 18;
            })
        }
    };
});
