describe('box', function ()
{
    'use strict';

    var scope;
    var window;
    var smallBox;
    var mediumBox;
    var bigBox;
    var button;

    beforeEach(module('boxApp'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($rootScope, $compile, $controller, $window)
    {

        window = $window;
        scope = $rootScope.$new();
        $controller('BoxCtrl', {$scope: scope});

        smallBox = angular.element('<box size="50px" color="color" open="showInside(size,name,color)"></box>');
        mediumBox = angular.element('<box size="70px" color="color" open="showInside(size,name,color)"></box>');
        bigBox = angular.element('<box size="90px" color="color" open="showInside(size,name,color)"></box>');

        $compile(smallBox)(scope);
        $compile(mediumBox)(scope);
        $compile(bigBox)(scope);
        scope.$digest();

    }));


    describe('smallBox', function ()
    {
        beforeEach(function ()
        {
            spyOn(window, 'alert');
            button = smallBox.find('button');
        });

        it('should display "My name is : Box. I am 50px and red" alert message', function ()
        {
            button.triggerHandler('click');
            expect(window.alert).toHaveBeenCalledWith('My name is : Box. I am 50px and red');
        });
    });

    describe('mediumBox', function ()
    {
        beforeEach(function ()
        {
            spyOn(window, 'alert');
            button = mediumBox.find('button');
        });

        it('should display "My name is : Box. I am 70px and red" alert message', function ()
        {
            button.triggerHandler('click');
            expect(window.alert).toHaveBeenCalledWith('My name is : Box. I am 70px and red');
        });
    });
    describe('bigBox', function ()
    {
        beforeEach(function ()
        {
            spyOn(window, 'alert');
            button = bigBox.find('button');
        });

        it('should display "My name is : Box. I am 90px and red" alert message', function ()
        {
            button.triggerHandler('click');
            expect(window.alert).toHaveBeenCalledWith('My name is : Box. I am 90px and red');
        });
    });

});
