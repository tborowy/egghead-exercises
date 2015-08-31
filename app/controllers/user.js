'use strict';

angular.module('controllers').controller('UserCtrl', ['$scope', 'Api', function ($scope, api)
{
    api.getUsers().then(function (data)
    {
        $scope.users = data;
    });
}]);
