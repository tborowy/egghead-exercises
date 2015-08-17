describe('restrict', function ()
{
    'use strict';
    var calcElements;

    beforeEach(module('calcApp'));

    beforeEach(inject(function ($rootScope, $compile, $controller, $window)
    {
        /*jshint -W117*/
        calcElements = calcAppElements;

    }));

    describe('calcAppElements', function ()
    {
        it('should have controllers property.', function ()
        {
            expect(calcElements.hasOwnProperty('controllers')).toBe(true);
        });
        it('should have directives property.', function ()
        {
            expect(calcElements.hasOwnProperty('directives')).toBe(true);
        });
    });

    describe('controllers', function ()
    {
        it('should have SumCtrl property.', function ()
        {
            expect(calcElements.controllers.hasOwnProperty('SumCtrl')).toBe(true);
        });
        it('should have SubCtrl property.', function ()
        {
            expect(calcElements.controllers.hasOwnProperty('SubCtrl')).toBe(true);
        });
        it('should have MultiCtrl property.', function ()
        {
            expect(calcElements.controllers.hasOwnProperty('MultiCtrl')).toBe(true);
        });
        it('should have DivideCtrl property.', function ()
        {
            expect(calcElements.controllers.hasOwnProperty('DivideCtrl')).toBe(true);
        });
    });

    describe('directives', function ()
    {
        it('should have multi property.', function ()
        {
            expect(calcElements.directives.hasOwnProperty('multi')).toBe(true);
        });
        it('should have divide property.', function ()
        {
            expect(calcElements.directives.hasOwnProperty('divide')).toBe(true);
        });
    });

});

