var BoxApplication = require('./pageFragments/boxApplication.fragment.js');
var boxApplication = new BoxApplication();

describe('Box application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('initialization', function ()
    {
        it('should display small box', function ()
        {
            expect(boxApplication.isSmallBox()).toBe(true);
        });
        it('should display medium box', function ()
        {
            expect(boxApplication.isMediumBox()).toBe(true);
        });
        it('should display big box', function ()
        {
            expect(boxApplication.isBigBox()).toBe(true);
        });
    });

    describe('box name', function ()
    {
        describe('small box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.clearSmallBoxName();
            });
            it('should set panel header to "John"', function ()
            {
                boxApplication.setSmallBoxName('John');
                expect(boxApplication.getSmallBoxName()).toBe('John');
            });
            it('should set panel header to "Maria"', function ()
            {
                boxApplication.setSmallBoxName('Maria');
                expect(boxApplication.getSmallBoxName()).toBe('Maria');
            });

        });

        describe('medium box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.clearMediumBoxName();
            });

            it('should set panel header to "Maria"', function ()
            {
                boxApplication.setMediumBoxName('Maria');
                expect(boxApplication.getMediumBoxName()).toBe('Maria');
            });
            it('should set panel header to "Andrew"', function ()
            {
                boxApplication.setMediumBoxName('Andrew');
                expect(boxApplication.getMediumBoxName()).toBe('Andrew');
            });
        });
        describe('big box', function ()
        {

            beforeEach(function ()
            {
                boxApplication.clearBigBoxName();
            });

            it('should set panel header to "Andrew"', function ()
            {
                boxApplication.setBigBoxName('Andrew');
                expect(boxApplication.getBigBoxName()).toBe('Andrew');
            });
            it('should set panel header to "John"', function ()
            {
                boxApplication.setBigBoxName('John');
                expect(boxApplication.getBigBoxName()).toBe('John');
            });
        });
    });

    describe('box color', function ()
    {
        describe('when color is selected in small box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.selectSmallBoxColor('blue');
            });

            it('should display small red box', function ()
            {
                expect(boxApplication.getSmallBoxColor()).toEqual('rgba(0, 0, 255, 1)');
            });
            it('should display medium red box', function ()
            {
                expect(boxApplication.getMediumBoxColor()).toEqual('rgba(0, 0, 255, 1)');
            });
            it('should display big red box', function ()
            {
                expect(boxApplication.getBigBoxColor()).toEqual('rgba(0, 0, 255, 1)');
            });

        });

        describe('when color is selected in medium box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.selectMediumBoxColor('green');
            });

            it('should display small green box', function ()
            {
                expect(boxApplication.getSmallBoxColor()).toEqual('rgba(0, 128, 0, 1)');
            });
            it('should display medium green box', function ()
            {
                expect(boxApplication.getMediumBoxColor()).toEqual('rgba(0, 128, 0, 1)');
            });
            it('should display big green box', function ()
            {
                expect(boxApplication.getBigBoxColor()).toEqual('rgba(0, 128, 0, 1)');
            });
        });

        describe('when color is selected in big box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.selectBigBoxColor('red');
            });

            it('should display small red box', function ()
            {
                expect(boxApplication.getSmallBoxColor()).toEqual('rgba(255, 0, 0, 1)');
            });
            it('should display medium red box', function ()
            {
                expect(boxApplication.getMediumBoxColor()).toEqual('rgba(255, 0, 0, 1)');
            });
            it('should display big red box', function ()
            {
                expect(boxApplication.getBigBoxColor()).toEqual('rgba(255, 0, 0, 1)');
            });
        });
    });

    describe('box alert message', function ()
    {
        describe('small box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.clearSmallBoxName();
            });

            afterEach(function ()
            {
                boxApplication.confirmAlert();
            });

            it('should display alert message with "Box 1234" name, "50px" size and "red" color', function ()
            {
                boxApplication.setSmallBoxName('Box 1234');
                boxApplication.selectSmallBoxColor('red');
                boxApplication.clickSmallBoxButton();
                expect(boxApplication.getAlertMessage()).toEqual('My name is : Box 1234. I am 50px and red');
            });

            it('should display alert message with "Box 1" name, "50px" size and "green" color', function ()
            {
                boxApplication.setSmallBoxName('Box 1');
                boxApplication.selectSmallBoxColor('green');
                boxApplication.clickSmallBoxButton();
                expect(boxApplication.getAlertMessage()).toEqual('My name is : Box 1. I am 50px and green');
            });
        });

        describe('medium box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.clearMediumBoxName();
            });

            afterEach(function ()
            {
                boxApplication.confirmAlert();
            });

            it('should display alert message with "Box 1234" name, "70px" size and "blue" color', function ()
            {
                boxApplication.setMediumBoxName('Box 1234');
                boxApplication.selectMediumBoxColor('blue');
                boxApplication.clickMediumBoxButton();
                expect(boxApplication.getAlertMessage()).toEqual('My name is : Box 1234. I am 70px and blue');
            });

            it('should display alert message with "Box 2" name, "50px" size and "green" color', function ()
            {
                boxApplication.setMediumBoxName('Box 2');
                boxApplication.selectMediumBoxColor('green');
                boxApplication.clickMediumBoxButton();
                expect(boxApplication.getAlertMessage()).toEqual('My name is : Box 2. I am 70px and green');
            });
        });
        describe('big box', function ()
        {
            beforeEach(function ()
            {
                boxApplication.clearBigBoxName();
            });

            afterEach(function ()
            {
                boxApplication.confirmAlert();
            });

            it('should display alert message with "Box 1234" name, "90px" size and "red" color', function ()
            {
                boxApplication.setBigBoxName('Box 1234');
                boxApplication.selectBigBoxColor('red');
                boxApplication.clickBigBoxButton();
                expect(boxApplication.getAlertMessage()).toEqual('My name is : Box 1234. I am 90px and red');
            });

            it('should display alert message with "Box 3" name, "90px" size and "green" color', function ()
            {
                boxApplication.setBigBoxName('Box 3');
                boxApplication.selectBigBoxColor('green');
                boxApplication.clickBigBoxButton();
                expect(boxApplication.getAlertMessage()).toEqual('My name is : Box 3. I am 90px and green');
            });
        });
    });
});
