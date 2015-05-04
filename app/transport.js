'use strict';

var app = angular.module('app', []);

app.service('TrainService', function ()
{
    this.trainTimetable = [{
        start: 'Kraków Główny', stop: 'Wieliczka', departure: '9:10', delay: null
    }, {
        start: 'Kraków Główny', stop: 'Rzeszów Główny', departure: '12:10', delay: null
    }, {
        start: 'Kraków Główny', stop: 'Krzeszowice', departure: '12:30', delay: null
    }];

    this.delay = 2;
    this.addDelay = function (train)
    {
        train.delay = this.delay;
    };

});

app.service('FlightService', function ($q)
{
    this.getFlight = function ()
    {
        var d = $q.defer();
        d.resolve([{
            airline: 'Eurolot', destination: 'Amsterdam', scheduled: '10:15'
        }, {
            airline: 'Lufthansa', destination: 'Frankfurt', scheduled: '10:30'
        }, {
            airline: 'Air Berlin', destination: 'Frankfurt', scheduled: '11:30'
        }]);
        return d.promise;
    };


});

app.controller('FlightCtrl', function ($scope, FlightService)
{
    FlightService.getFlight().then(function (result)
    {
        $scope.flightSchedule = result;
    });

    $scope.isCancel = [];

    $scope.toggleClass = function (id)
    {
        if ($scope.isCancel[id] === 'danger') {
            $scope.isCancel[id] = '';
        } else {
            $scope.isCancel[id] = 'danger';
        }
    };

});

app.run(function ($rootScope, TrainService)
{
    $rootScope.busTimetable = [{
        start: 'Tarnów', via: 'Tarnów Mościce', stop: 'Kraków', departure: '8:00'
    }, {
        start: 'Tarnów', via: 'Wojnicz', stop: 'Kraków', departure: '8:10'
    }, {
        start: 'Tarnów', via: 'Tarnów Mościce', stop: 'Kraków', departure: '8:15'
    }];
    $rootScope.viaStop = 'Wojnicz';
    $rootScope.TrainService = TrainService;
});
