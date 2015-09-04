describe('transport', function ()
{
    'use strict';
    var busList = [{
        start: 'Tarnów', via: 'Tarnów Mościce', stop: 'Kraków', departure: '8:00'
    }, {
        start: 'Tarnów', via: 'Wojnicz', stop: 'Kraków', departure: '8:10'
    }, {
        start: 'Tarnów', via: 'Tarnów Mościce', stop: 'Kraków', departure: '8:15'
    }];

    var trainList = [{
        start: 'Kraków Główny', stop: 'Wieliczka', departure: '9:10', delay: null
    }, {
        start: 'Kraków Główny', stop: 'Rzeszów Główny', departure: '12:10', delay: null
    }, {
        start: 'Kraków Główny', stop: 'Krzeszowice', departure: '12:30', delay: null
    }];

    var flightList = [{
        airline: 'Eurolot', destination: 'Amsterdam', scheduled: '10:15'
    }, {
        airline: 'Lufthansa', destination: 'Frankfurt', scheduled: '10:30'
    }, {
        airline: 'Air Berlin', destination: 'Frankfurt', scheduled: '11:30'
    }];

    var busService;
    var busCtrl;
    var trainService;
    var trainCtrl;
    var flightService;
    var flightCtrl;


    beforeEach(module('app'));

    beforeEach(inject(function ($controller, Bus, Train, Flight)
    {
        busService = Bus;
        trainService = Train;
        flightService = jasmine.createSpyObj('Flight', ['getFlight']);
        flightService.getFlight.andReturn({
            then: function (success)
            {
                success(flightList);
            }
        });
        busCtrl = $controller('BusCtrl', {Bus: busService});
        trainCtrl = $controller('TrainCtrl', {Train: trainService});
        flightCtrl = $controller('FlightCtrl', {Flight: flightService});

    }));
    describe('Bus', function ()
    {
        describe('service', function ()
        {
            it('should set busTimetable', function ()
            {
                expect(busService.busTimetable).toEqual(busList);
            });
            it('should set viaStop', function ()
            {
                expect(busService.viaStop).toEqual('Wojnicz');
            });
        });

        describe('controller', function ()
        {
            it('should set busTimetable', function ()
            {
                expect(busCtrl.busTimetable).toEqual(busList);
            });
            it('should set viaStop', function ()
            {
                expect(busCtrl.viaStop).toEqual(busService.viaStop);
            });
        });
    });

    describe('Train', function ()
    {
        describe('service', function ()
        {
            it('should set trainTimetable', function ()
            {
                expect(trainService.trainTimetable).toEqual(trainList);
            });
            it('should set delay', function ()
            {
                expect(trainService.delay).toEqual(2);
            });
            it('should set train delay to default', function ()
            {
                trainService.addDelay(trainService.trainTimetable[0]);
                expect(trainService.trainTimetable[0].delay).toEqual(2);
            });
            it('should set train delay to 5 min', function ()
            {
                trainService.delay = 5;
                trainService.addDelay(trainService.trainTimetable[0]);
                expect(trainService.trainTimetable[0].delay).toEqual(5);
            });
        });

        describe('controller', function ()
        {
            it('should set trainTimetable', function ()
            {
                expect(trainCtrl.trainTimetable).toEqual(trainList);
            });
            it('should set delay', function ()
            {
                expect(trainCtrl.delay).toEqual(trainService.delay);
            });
            it('should set addDelay', function ()
            {
                expect(trainCtrl.addDelay).toEqual(trainService.addDelay);
            });
        });
    });


    describe('Flight', function ()
    {
        describe('controller', function ()
        {
            it('should set flightSchedule', function ()
            {
                expect(flightCtrl.flightSchedule).toEqual(flightList);
            });
            it('should set isCancel to empty array', function ()
            {
                expect(flightCtrl.isCancel).toEqual([]);
            });
        });

        describe('service', function ()
        {
            it('should call getFlight', function ()
            {
                expect(flightService.getFlight).toHaveBeenCalled();
            });
        });

        describe('toggleClass', function ()
        {
            beforeEach(function ()
            {
                flightCtrl.toggleClass(0);
            });
            it('should set isCancel to danger', function ()
            {
                expect(flightCtrl.isCancel).toEqual(['danger']);
            });
            it('should set isCancel to empty string', function ()
            {
                flightCtrl.toggleClass(0);
                expect(flightCtrl.isCancel).toEqual(['']);
            });

        });
    });
});

