describe('restrict', function ()
{
    'use strict';

    var scope;
    var logMock;
    var locationMock;
    var getEvent;
    var displayLogCtrlMock;
    var eventMockA = {toElement: {id: '3'}, pageX: 782, pageY: 215};
    var eventMockB = {toElement: {id: '7'}, pageX: 13, pageY: 2};


    beforeEach(module('app'));
    beforeEach(inject(function ($rootScope, $compile, $controller)
    {
        scope = $rootScope.$new();
        logMock = jasmine.createSpyObj('$log', ['debug']);
        logMock.debug.andCallFake(function (event)
        {
            getEvent = event;
        });
        locationMock = jasmine.createSpyObj('$location', ['path']);
        displayLogCtrlMock = $controller('displayLog', {$scope: scope, $location: locationMock, $log: logMock});
    }));

    describe('display function', function ()
    {
        describe('$log', function ()
        {
            describe('when you click button on x = 782 and y on 215', function ()
            {
                beforeEach(function ()
                {
                    scope.display(eventMockA);
                });

                it('should call $log.debug', function ()
                {
                    expect(eventMockA).toBe(getEvent);
                    expect(logMock.debug).toHaveBeenCalledWith(eventMockA);
                });

                it('should set scope.pageX to 728', function ()
                {
                    expect(scope.pageX).toEqual(782);
                });
                it('should set scope.pageY to 215', function ()
                {
                    expect(scope.pageY).toEqual(215);
                });
            });

            describe('when you click button on x = 13 and y on 2', function ()
            {
                beforeEach(function ()
                {
                    scope.display(eventMockB);
                });

                it('should call $log.debug', function ()
                {
                    expect(eventMockB).toBe(getEvent);
                    expect(logMock.debug).toHaveBeenCalledWith(eventMockB);
                });

                it('should set scope.pageX to 13', function ()
                {
                    expect(scope.pageX).toEqual(13);
                });
                it('should set scope.pageY to 2', function ()
                {
                    expect(scope.pageY).toEqual(2);
                });
            });
        });

        describe('$location', function ()
        {
            beforeEach(function ()
            {
                scope.display(eventMockA);
            });

            it('should call "/check" path', function ()
            {
                expect(locationMock.path).toHaveBeenCalledWith('/check');
            });
        });
    });
});
