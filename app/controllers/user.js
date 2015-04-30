'use strict';

angular.module('app.controllers').controller('controllers.User', ['$scope', 'services.Api', function ($scope, api)
{
    api.getUsers().then(function (data)
    {
        $scope.users = data;
    });
}]);
