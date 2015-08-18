describe('car', function ()
{
    'use strict';

    var carCtrl;
    var spyInjector;

    beforeEach(module('app'));
    beforeEach(inject(function ($controller, $timeout)
    {
        spyInjector = jasmine.createSpyObj('$injector', ['invoke']);
        carCtrl = $controller('CarCtrl', {$timeout: $timeout, $injector: spyInjector});

    }));

    describe('checkNow function', function ()
    {
        beforeEach(inject(function ($timeout)
        {
            carCtrl.checkNow();
            $timeout.flush();

        }));

        it('should set call $injector.invoke', function ()
        {
            expect(spyInjector.invoke).toHaveBeenCalledWith(jasmine.any(Function));
        });
    });

    describe('wait function', function ()
    {
        beforeEach(inject(function ($timeout)
        {
            carCtrl.wait();
            $timeout.flush();

        }));

        it('should set call $injector.invoke', function ()
        {
            expect(spyInjector.invoke).toHaveBeenCalledWith(jasmine.any(Function));
        });
    });

});
