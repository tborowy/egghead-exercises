describe('hero', function ()
{
    'use strict';

    var element;
    var scope;
    var hero;
    var mask;
    var superhero;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile)
    {

        element =
                angular.element('<div class="col-sm-offset-2 col-sm-2">' +
                        '<hero></hero></div><div class="col-sm-2"><superhero></superhero></div><div class="col-sm-2"><hero></hero></div>');

        scope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));


    describe('hero directive', function ()
    {
        beforeEach(function ()
        {
            hero = element.find('hero');

        });
        it('should has "hero-position" class', function ()
        {
            expect(hero.find('img').hasClass('hero-position')).toBe(true);
        });

        it('should set the width of the image to 300px', function ()
        {
            expect((hero.find('img')).attr('width')).toBe('300px');
        });
    });

    describe('mask directive', function ()
    {
        beforeEach(function ()
        {
            mask = element.find('mask');

        });
        it('should has "mask-position" class', function ()
        {
            expect(mask.find('img').hasClass('mask-position')).toBe(true);
        });
        it('should set the width of the image to 62px', function ()
        {
            expect((mask.find('img')).attr('width')).toBe('62px');
        });
    });

    describe('superhero directive', function ()
    {
        beforeEach(function ()
        {
            superhero = element.find('superhero').find('div');

        });
        it('should has "relative-position" class', function ()
        {
            expect(superhero.hasClass('relative-position')).toBe(true);
        });

        it('should contain hero directive', function ()
        {
            expect(superhero.find('hero').find('img').hasClass('hero-position')).toBe(true);
        });
        it('should contain mask directive', function ()
        {
            expect(superhero.find('mask').find('img').hasClass('mask-position')).toBe(true);
        });
    });


});
