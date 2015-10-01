describe('animal', function ()
{
    'use strict';

    var dog;
    var cat;
    var pig;
    var scope;

    beforeEach(module('animalApp'));

    beforeEach(inject(function ($rootScope, $compile)
    {
        dog = angular.element('<animal name="dog"><div class="btn btn-default"><img src="assets/images/trueDog.png"></div></animal>');
        cat = angular.element('<animal name="cat"><div class="btn btn-default"><img src="assets/images/trueCat.png"></div></animal>');
        pig = angular.element('<animal name="pig"><div class="btn btn-default"><img src="assets/images/truePig.png"></div></animal>');

        scope = $rootScope;
        $compile(dog)(scope);
        $compile(cat)(scope);
        $compile(pig)(scope);
        scope.$digest();
    }));


    describe('animal dog directive', function ()
    {
        it('should set the src of the dog image to transclude path', function ()
        {
            expect(dog.find('img').attr('src')).toBe('assets/images/trueDog.png');
        });

    });

    describe('animal cat directive', function ()
    {
        it('should set the src of the cat image to transclude path', function ()
        {
            expect(cat.find('img').attr('src')).toBe('assets/images/trueCat.png');
        });

    });

    describe('animal pig directive', function ()
    {
        it('should set the src of the pig image to transclude path', function ()
        {
            expect(pig.find('img').attr('src')).toBe('assets/images/truePig.png');
        });

    });
});
