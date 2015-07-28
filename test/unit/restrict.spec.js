describe('restrict', function ()
{
    'use strict';

    var window;
    var scope;
    var restrictE, restrictEAttribute, restrictEClass, restrictEComment;
    var restrictA, restrictAElement, restrictAClass, restrictAComment;
    var restrictC, restrictCElement, restrictCAttribute, restrictCComment;
    var restrictM, restrictMElement, restrictMClass, restrictMAttribute;

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
            restrictEAttribute = angular.element('<div restrict-e></div>');
            restrictEClass = angular.element('<div class="restrict-e"></div>');
            restrictEComment = angular.element('<!-- directive: restrict-e -->');

            $compile(restrictE)(scope);
            $compile(restrictEAttribute)(scope);
            $compile(restrictEClass)(scope);
            $compile(restrictEComment)(scope);
            scope.$digest();

        }));
        it('should display "E: this directive use restrict E" message when the directive is call as an element.', function ()
        {
            expect(restrictE.text()).toBe('E: this directive use restrict E');
        });

        it('should display empty string when the directive is call as an attribute', function ()
        {
            expect(restrictEAttribute.text()).toBe('');
        });
        it('should display empty string when the directive is call as a class', function ()
        {
            expect(restrictEClass.text()).toBe('');
        });
        it('should display empty string when the directive is call as a comment', function ()
        {
            expect(restrictEComment.text()).toBe('');
        });
    });

    describe('restrict-a directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictA = angular.element('<div restrict-a></div>');
            restrictAElement = angular.element('<restrict-a></restrict-a>');
            restrictAClass = angular.element('<div class="restrict-a"></div>');
            restrictAComment = angular.element('<!-- directive: restrict-a -->');

            $compile(restrictA)(scope);
            $compile(restrictAElement)(scope);
            $compile(restrictAClass)(scope);
            $compile(restrictAComment)(scope);
            scope.$digest();

        }));

        it('should display "A: this directive use restrict A" message when the directive is call as an attribute.', function ()
        {
            expect(restrictA.text()).toBe('A: this directive use restrict A');
        });

        it('should display empty string when the directive is call as an element', function ()
        {
            expect(restrictAElement.text()).toBe('');
        });
        it('should display empty string when the directive is call as a class', function ()
        {
            expect(restrictAClass.text()).toBe('');
        });
        it('should display empty string when the directive is call as a comment', function ()
        {
            expect(restrictAComment.text()).toBe('');
        });
    });
    describe('restrict-c directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictC = angular.element('<div class="restrict-c"></div>');
            restrictCElement = angular.element('<restrict-c></restrict-c>');
            restrictCAttribute = angular.element('<div restrict-c></div>');
            restrictCComment = angular.element('<!-- directive: restrict-c -->');

            $compile(restrictC)(scope);
            $compile(restrictCElement)(scope);
            $compile(restrictCAttribute)(scope);
            $compile(restrictCComment)(scope);
            scope.$digest();

        }));

        it('should display "C: this directive use restrict C" message when the directive is call as a class.', function ()
        {
            expect(restrictC.text()).toBe('C: this directive use restrict C');
        });

        it('should display empty string when the directive is call as an element', function ()
        {
            expect(restrictCElement.text()).toBe('');
        });
        it('should display empty string when the directive is call as a attribute', function ()
        {
            expect(restrictCAttribute.text()).toBe('');
        });
        it('should display empty string when the directive is call as a comment', function ()
        {
            expect(restrictCComment.text()).toBe('');
        });
    });
    describe('restrict-m directive', function ()
    {
        beforeEach(inject(function ($compile)
        {
            spyOn(window, 'alert');
            restrictM = angular.element('<!-- directive: restrict-m -->');
            restrictMClass = angular.element('<div class="restrict-m"></div>');
            restrictCElement = angular.element('<restrict-m></restrict-m>');
            restrictCAttribute = angular.element('<div restrict-m></div>');

            $compile(restrictM)(scope);
            $compile(restrictMElement)(scope);
            $compile(restrictMAttribute)(scope);
            $compile(restrictMClass)(scope);
            scope.$digest();

        }));
        it('should display "Restrict M: working..." alert message when the directive is call as a comment.', function ()
        {
            expect(window.alert).toHaveBeenCalledWith('Restrict M: working...');
        });


        it('should return undefined when the directive is call as an element', function ()
        {
            expect(restrictMElement).toBe(undefined);
        });
        it('should return undefined when the directive is call as a attribute', function ()
        {
            expect(restrictMAttribute).toBe(undefined);
        });
        it('should display empty string when the directive is call as a class', function ()
        {
            expect(restrictMClass.text()).toBe('');
        });
    });

});

