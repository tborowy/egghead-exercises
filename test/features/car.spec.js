var CarApplication = require('./pageFragments/carApplication.fragment.js');
var carApplication = new CarApplication();

describe('Car application', function ()
{
    'use strict';

    describe('initialization', function ()
    {
        beforeAll(function ()
        {
            browser.get('/');
        });

        it('should set default path to "/"', function ()
        {
            expect(carApplication.getPath()).toEqual('/');
        });
        it('should set brand default to "Ferrari"', function ()
        {
            expect(carApplication.getBrand()).toEqual('Ferrari');
        });
        it('should set capacity default to "3.5"', function ()
        {
            expect(carApplication.getCapacity()).toEqual('3.5');
        });

    });

    describe('details', function ()
    {
        describe('with default brand and capacity', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                carApplication.clickNextButton();
            });
            it('should change path to "/details/Ferrari/3.5"', function ()
            {
                expect(carApplication.getPath()).toEqual('/details/Ferrari/3.5');
            });
            it('should display car brand', function ()
            {
                expect(carApplication.getBrandText()).toEqual('Brand: Ferrari');
            });
            it('should display car capacity', function ()
            {
                expect(carApplication.getCapacityText()).toEqual('Engine capacity: 3.5');
            });
            it('should not display secret image', function ()
            {
                expect(carApplication.isSecretImage()).toEqual(false);
            });
        });

        describe('with new brand and capacity', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                carApplication.clearBrand();
                carApplication.clearCapacity();
                carApplication.setBrand('Audi');
                carApplication.setCapacity(2);
                carApplication.clickNextButton();
            });

            it('should change path to "/details/Audi/2"', function ()
            {
                expect(carApplication.getPath()).toEqual('/details/Audi/2');
            });
            it('should display car brand', function ()
            {
                expect(carApplication.getBrandText()).toEqual('Brand: Audi');
            });
            it('should display car capacity', function ()
            {
                expect(carApplication.getCapacityText()).toEqual('Engine capacity: 2');
            });
            it('should not display secret image', function ()
            {
                expect(carApplication.isSecretImage()).toEqual(false);
            });
        });
    });

    describe('secret', function ()
    {
        describe('when I set brand to secret "spy" word', function ()
        {
            beforeAll(function ()
            {
                browser.get('/');
                carApplication.clearBrand();
                carApplication.setBrand('spy');
                carApplication.clickNextButton();
            });
            it('should change path to "/secret"', function ()
            {
                expect(carApplication.getPath()).toEqual('/secret');
            });

            it('should display secret image', function ()
            {
                expect(carApplication.isSecretImage()).toEqual(true);
            });
        });
    });
});
