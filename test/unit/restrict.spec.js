describe('restrict', function ()
{
    'use strict';

    var window;
    var scope;
    var restrictE;
    var restrictA;
    var restrictC;
    var restrictM;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile, $controller, $window)
    {

        window = $window;
        scope = $rootScope.$new();
        $controller('AppCtrl', {$scope: scope});

    }));

    describe('restrict-e directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictE = angular.element('<restrict-e></restrict-e>');

            $compile(restrictE)(scope);
            scope.$digest();

        }));
        it('should display "E: this directive use restrict E" message when the directive is call as an element.', function ()
        {
            expect(restrictE.text()).toBe('E: this directive use restrict E');
        });
    });

    describe('restrict-a directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictA = angular.element('<div restrict-a></div>');

            $compile(restrictA)(scope);
            scope.$digest();

        }));

        it('should display "A: this directive use restrict A" message when the directive is call as an attribute.', function ()
        {
            expect(restrictA.text()).toBe('A: this directive use restrict A');
        });

    });
    describe('restrict-c directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictC = angular.element('<div class="restrict-c"></div>');

            $compile(restrictC)(scope);
            scope.$digest();

        }));

        it('should display "C: this directive use restrict C" message when the directive is call as a class.', function ()
        {
            expect(restrictC.text()).toBe('C: this directive use restrict C');
        });

    });
    describe('restrict-m directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictM = angular.element('<!-- directive: restrict-m -->');

            $compile(restrictM)(scope);
            scope.$digest();

        }));
        it('should display "Restrict M: working..." alert message when the directive is call as a comment.', function ()
        {
            expect(window.alert).toHaveBeenCalledWith('Restrict M: working...');
        });

    });

});

