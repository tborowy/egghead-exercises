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
        circle = angular.element('<div enter="btn-danger" leave="btn-danger" class="circle center-block"></div>');
        square = angular.element('<div click-on="btn-info" db-click-on="btn-info" class="square center-block"></div>');
        circle = $compile(circle)($rootScope);
        square = $compile(square)($rootScope);
    }));

    describe('circle', function ()
    {
        beforeEach(function ()
        {
            circle.triggerHandler('mouseenter');
        });
        it('should add btn-danger a class when mouseenter', function ()
        {
            expect(circle.hasClass('btn-danger')).toBe(true);
        });

        it('should remove btn-danger class when mouseleave', function ()
        {
            circle.triggerHandler('mouseleave');
            expect(circle.hasClass('btn-danger')).toBe(false);
        });

    });

    describe('square', function ()
    {
        beforeEach(function ()
        {
            square.triggerHandler('click');
        });

        it('should add btn-info class when click', function ()
        {
            expect(square.hasClass('btn-info')).toBe(true);
        });

        it('should remove btn-info class when dblClick', function ()
        {
            square.triggerHandler('dblclick');
            expect(square.hasClass('btn-info')).toBe(false);
        });

    });
});
