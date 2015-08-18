describe('directives', function ()
{
    'use strict';

    var circle;
    var square;
    var $scope;

    beforeEach(module('app'));
    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        circle = angular.element('<div enter="bg-danger" leave class="circle center-block"></div>');
        square = angular.element('<div click-on="bg-info" db-click-on class="square center-block"></div>');
        circle = $compile(circle)($rootScope);
        square = $compile(square)($rootScope);
    }));

    describe('circle', function ()
    {
        beforeEach(function ()
        {
            circle.triggerHandler('mouseenter');
        });
        it('should add bg-danger a class when mouseenter', function ()
        {
            expect(circle.hasClass('bg-danger')).toBe(true);
        });

        it('should remove bg-info class when mouseleave', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.hasClass('bg-danger')).toBe(false);
        });

    });

    describe('square', function ()
    {
        beforeEach(function ()
        {
            square.triggerHandler('click');
        });

        it('should add bg-info class when click', function ()
        {
            expect(square.hasClass('bg-info')).toBe(true);
        });

        it('should remove bg-info class when dblClick', function ()
        {
            square.triggerHandler('dblclick');
            expect(square.hasClass('bg-info')).toBe(false);
        });

    });
});
