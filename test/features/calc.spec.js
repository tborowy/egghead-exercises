var CalcApplication = require('./pageFragments/calcApplication.fragment.js');
var calcApplication = new CalcApplication();

describe('Calc application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should display the result of the sum', function ()
        {
            calcApplication.clickSumButton();
            expect(calcApplication.getSumResult()).toEqual('7');
        });
        it('should display the result of the subtraction', function ()
        {
            calcApplication.clickSubButton();
            expect(calcApplication.getSubResult()).toEqual('11');
        });
        it('should display the result of the multiplication', function ()
        {
            calcApplication.clickMultiButton();
            expect(calcApplication.getMultiResult()).toEqual('24');
        });
        it('should display the result of the divide', function ()
        {
            calcApplication.clickDivideButton();
            expect(calcApplication.getDivideResult()).toEqual('3.00');
        });
    });

    describe('sum', function ()
    {
        beforeEach(function ()
        {
            calcApplication.clearSumFirstNumber();
            calcApplication.clearSumSecondNumber();
        });
        it('should add 124 to 24', function ()
        {
            calcApplication.setSumFirstNumber(124);
            calcApplication.setSumSecondNumber(24);
            calcApplication.clickSumButton();
            expect(calcApplication.getSumResult()).toEqual('148');
        });

        it('should add 1 to 1', function ()
        {
            calcApplication.setSumFirstNumber(1);
            calcApplication.setSumSecondNumber(1);
            calcApplication.clickSumButton();
            expect(calcApplication.getSumResult()).toEqual('2');
        });
    });

    describe('subtraction', function ()
    {
        beforeEach(function ()
        {
            calcApplication.clearSubFirstNumber();
            calcApplication.clearSubSecondNumber();
        });
        it('should subtract 24 from 56', function ()
        {
            calcApplication.setSubFirstNumber(56);
            calcApplication.setSubSecondNumber(24);
            calcApplication.clickSubButton();
            expect(calcApplication.getSubResult()).toEqual('32');
        });

        it('should subtract -3 from 1', function ()
        {
            calcApplication.setSubFirstNumber(-1);
            calcApplication.setSubSecondNumber(3);
            calcApplication.clickSubButton();
            expect(calcApplication.getSubResult()).toEqual('-4');
        });
    });
    describe('multiplication', function ()
    {
        beforeEach(function ()
        {
            calcApplication.clearMultiFirstNumber();
            calcApplication.clearMultiSecondNumber();
        });
        it('should multiple 3 and 3', function ()
        {
            calcApplication.setMultiFirstNumber(3);
            calcApplication.setMultiSecondNumber(3);
            calcApplication.clickMultiButton();
            expect(calcApplication.getMultiResult()).toEqual('9');
        });
        it('should multiple -10 and -9', function ()
        {
            calcApplication.setMultiFirstNumber(-10);
            calcApplication.setMultiSecondNumber(-9);
            calcApplication.clickMultiButton();
            expect(calcApplication.getMultiResult()).toEqual('90');
        });
    });
    describe('divide', function ()
    {
        beforeEach(function ()
        {
            calcApplication.clearDivideFirstNumber();
            calcApplication.clearDivideSecondNumber();
        });
        it('should divide 15 by 2', function ()
        {
            calcApplication.setDivideFirstNumber(15);
            calcApplication.setDivideSecondNumber(2);
            calcApplication.clickDivideButton();
            expect(calcApplication.getDivideResult()).toEqual('7.50');
        });
        it('should divide 12 and 3', function ()
        {
            calcApplication.setDivideFirstNumber(12);
            calcApplication.setDivideSecondNumber(3);
            calcApplication.clickDivideButton();
            expect(calcApplication.getDivideResult()).toEqual('4.00');
        });
    });

});
