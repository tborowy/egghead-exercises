var ElementApplication = require('./pageFragments/elementApplication.fragment.js');
var elementApplication = new ElementApplication();

describe('Element application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should have empty input', function ()
        {
            expect(elementApplication.getInputValue()).toEqual('');
        });
    });

    describe('write some text that isn\'t keyword', function ()
    {
        beforeEach(function ()
        {
            elementApplication.clearInputValue();
        });
        it('should not show circle element', function ()
        {
            elementApplication.setInputValue('some circle');
            expect(elementApplication.isCirclePresent()).toEqual(false);
        });
        it('should not show square element', function ()
        {
            elementApplication.setInputValue('one square');
            expect(elementApplication.isSquarePresent()).toEqual(false);
        });
    });

    describe('write keywords', function ()
    {
        beforeEach(function ()
        {
            elementApplication.clearInputValue();
        });

        it('should display circle when I write "circle"', function ()
        {
            elementApplication.setInputValue('circle');
            expect(elementApplication.isCirclePresent()).toEqual(true);
        });
        it('should display square when I write "square"', function ()
        {
            elementApplication.setInputValue('square');
            expect(elementApplication.isSquarePresent()).toEqual(true);
        });

    });
});
