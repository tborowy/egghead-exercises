var SnowApplication = require('./pageFragments/snowApplication.fragment.js');
var snowApplication = new SnowApplication();

describe('Snow application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('initialization', function ()
    {
        it('should see green square with ability to add petal', function ()
        {
            expect(snowApplication.isGreenSquarePresent()).toBe(true);
        });

        it('should see red square with ability to remove petal', function ()
        {
            expect(snowApplication.isRedSquarePresent()).toBe(true);

        });

    });

    describe('add petal', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
        });

        it('should display one petal', function ()
        {
            expect(snowApplication.countPetals()).toEqual(1);
        });

        it('should display four petals', function ()
        {
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnGreenSquare();

            expect(snowApplication.countPetals()).toEqual(4);
        });
    });

    describe('remove petal', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnGreenSquare();
        });

        it('should remove all petals', function ()
        {
            snowApplication.moveMouseOnRedSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnRedSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnRedSquare();
            snowApplication.moveMouseOnHeader();
            expect(snowApplication.countPetals()).toEqual(0);
        });

        it('should remove one petal and display two petals', function ()
        {
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnHeader();
            snowApplication.moveMouseOnGreenSquare();
            snowApplication.moveMouseOnRedSquare();

            expect(snowApplication.countPetals()).toEqual(4);
        });
    });
});
