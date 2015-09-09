describe('alarm', function () {
    'use strict';

    var window;
    var scope;
    var redAlarm;
    var yellowAlarm;
    var greenAlarm;

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile, $window) {

        window = $window;
        scope = $rootScope.$new();

        redAlarm = angular.element('<div alarm red class="circle bg-danger col-md-offset-4"></div>');
        yellowAlarm = angular.element('<div alarm yellow class="circle bg-warning col-md-offset-4"></div>');
        greenAlarm = angular.element('<div alarm green class="circle bg-success col-md-offset-4"></div>');

        $compile(redAlarm)(scope);
        $compile(yellowAlarm)(scope);
        $compile(greenAlarm)(scope);
        scope.$digest();

    }));

    describe('red alarm', function () {
        beforeEach(function () {
            spyOn(window, 'alert');
            redAlarm.triggerHandler('click');
        });
        it('should display "Red alarm!" alert message.', function () {
            expect(window.alert).toHaveBeenCalledWith('Red alarm!');
        });
    });

    describe('yellow alarm', function () {
        beforeEach(function () {
            spyOn(window, 'alert');
            yellowAlarm.triggerHandler('dblclick');
        });
        it('should display "Yellow alarm!" alert message.', function () {
            expect(window.alert).toHaveBeenCalledWith('Yellow alarm!');
        });
    });
    describe('green alarm', function () {
        beforeEach(function () {
            spyOn(window, 'alert');
            greenAlarm.triggerHandler('mouseenter');
        });
        it('should display "Green alarm!" alert message.', function () {
            expect(window.alert).toHaveBeenCalledWith('Green alarm!');
        });
    });

});
