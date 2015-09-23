var FruitApplication = require('./pageFragments/fruitApplication.fragment.js');
var fruitApplication = new FruitApplication();

describe('Fruit application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should set the seller input to "Mr. John"', function ()
        {
            expect(fruitApplication.getSellerInputValue()).toBe('Mr. John');
        });
        it('should set the name input to "apple"', function ()
        {
            expect(fruitApplication.getNameInputValue()).toBe('apple');
        });
        it('should set the count input to 3', function ()
        {
            expect(fruitApplication.getCountInputValue()).toBe('3');
        });
    });


    describe('when new seller is entered', function ()
    {
        beforeAll(function ()
        {
            fruitApplication.clearAllInputs();
            fruitApplication.setSellerInput('Jack');
            fruitApplication.setNameInput('orange');
            fruitApplication.setCountInput(52);
        });

        it('should display the new message', function ()
        {
            expect(fruitApplication.getMessage()).toEqual('Good morning Jack!');
        });
        it('should display the new order', function ()
        {
            expect(fruitApplication.getOrder()).toEqual('I want to buy one orange x 52 times');
        });
        it('should display the new heading', function ()
        {
            expect(fruitApplication.getHeading()).toEqual('I\'m "orange" please buy me!');
        });
    });
});
