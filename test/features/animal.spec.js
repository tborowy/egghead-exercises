var AnimalApplication = require('./pageFragments/animalApplication.fragment.js');
var animalApplication = new AnimalApplication();

describe('Animal application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should set translude in animal directive', function ()
        {
            expect(animalApplication.isTranscludeElementFound()).toBe(true);
        });

        it('should display true picture of cat', function ()
        {
            expect(animalApplication.getCatImage()).toMatch('assets/images/trueCat.png');
        });
        it('should display true picture of dog', function ()
        {
            expect(animalApplication.getDogImage()).toMatch('assets/images/trueDog.png');
        });
        it('should display true picture of pig', function ()
        {
            expect(animalApplication.getPigImage()).toMatch('assets/images/truePig.png');
        });
    });
});
