describe('home', function ()
{
    'use strict';

    var homeCtrl;
    var homeProvider;

    beforeEach(function ()
    {

        var fakeModule = angular.module('test.homeApp', function ()
        {
        });
        fakeModule.config(function (HomeProvider)
        {
            homeProvider = HomeProvider;
        });
        module('homeApp', 'test.homeApp');

        inject(function ()
        {
        });
    });

    beforeEach(inject(function ($rootScope, $controller, Home)
    {
        homeCtrl = $controller('HomeCtrl', {Home: Home});
    }));


    describe('provider', function ()
    {
        it('should be defined', function ()
        {
            expect(homeProvider).not.toBeUndefined();
        });

    });

    describe('color', function ()
    {

        it('should use setColor to set "yellow" color', function ()
        {
            expect(homeProvider).not.toBeUndefined();
            homeProvider.setColor('yellow');

            expect(homeProvider.$get().color).toEqual('yellow');
        });

        it('should use setColor to set "green" color', function ()
        {
            expect(homeProvider).not.toBeUndefined();
            homeProvider.setColor('green');

            expect(homeProvider.$get().color).toEqual('green');
        });

    });

    describe('number', function ()
    {
        describe('even argument', function ()
        {
            it('should set number to 99 when argument is 24', function ()
            {
                expect(homeProvider).not.toBeUndefined();
                homeProvider.setNumber('24');

                expect(homeProvider.$get().number).toEqual(99);
            });
            it('should set number to 99 when argument is 12', function ()
            {
                expect(homeProvider).not.toBeUndefined();
                homeProvider.setNumber('12');

                expect(homeProvider.$get().number).toEqual(99);
            });

        });

        describe('odd argument', function ()
        {
            it('should set number to 100 when argument is 11', function ()
            {
                expect(homeProvider).not.toBeUndefined();
                homeProvider.setNumber('11');

                expect(homeProvider.$get().number).toEqual(100);
            });

            it('should set number to 100 when argument is 45', function ()
            {
                expect(homeProvider).not.toBeUndefined();
                homeProvider.setNumber('45');

                expect(homeProvider.$get().number).toEqual(100);
            });


        });

    });


});
