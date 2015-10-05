var HeroApplication = require('./pageFragments/heroApplication.fragment.js');
var heroApplication = new HeroApplication();

describe('Sample application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should display first hero', function ()
        {
            expect(heroApplication.isFirstHeroPresent()).toBe(true);
        });
        it('should display superhero', function ()
        {
            expect(heroApplication.isSuperheroHeroPresent()).toBe(true);
            expect(heroApplication.isSuperheroMaskPresent()).toBe(true);
        });
        it('should display second hero', function ()
        {
            expect(heroApplication.isSecondHeroPresent()).toBe(true);
        });
    });
});
