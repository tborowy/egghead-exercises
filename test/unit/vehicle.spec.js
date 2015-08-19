describe('restrict', function ()
{
    'use strict';

    var window;
    var scope;
    var car;
    var bus;
    var audi;
    var jelcz;
    var singleAudi;
    var singleJelcz;
    var buttons;


    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile, $controller, $window)
    {
        window = $window;
        scope = $rootScope.$new();
    }));

    beforeEach(inject(function ()
    {
        audi = angular.element('<vehicle><car><audi></audi></car></vehicle>');
        jelcz = angular.element('<vehicle><bus><jelcz></jelcz></bus></vehicle>');
        car = angular.element('<car></car>');
        bus = angular.element('<bus></bus>');
        singleAudi = angular.element('<audi></audi>');
        singleJelcz = angular.element('<jelcz></jelcz>');
    }));


    describe('audi directive', function ()
    {
        describe('properly used', function ()
        {
            beforeEach(inject(function ($compile)
            {
                $compile(audi)(scope);
                buttons = [];
                var buttonElements = audi.find('audi').find('button');
                angular.forEach(buttonElements, function (button)
                {
                    buttons.push(button);
                });
            }));
            it('should display "You are in the car" message', function ()
            {
                expect(audi.find('strong').text()).toBe('You are in the car');
            });

            it('should display "I am fast car! 80 km/h! Whoa!" message after click on "Drive" button', function ()
            {
                buttons[0].click();
                expect(audi.find('audi').find('h3').text()).toBe('I am fast car! 80 km/h! Whoa!');
            });

            it('should display "Click" alert message after click on "Seat belts!" button', function ()
            {
                spyOn(window, 'alert');
                buttons[1].click();
                expect(window.alert).toHaveBeenCalledWith('Click!');
            });

        });


        describe('incorrectly used', function ()
        {
            it('should throw exception when vehicle or car directives are not required', inject(function ($compile)
            {
                expect(function ()
                {
                    $compile(singleAudi)(scope);
                }).toThrow();

            }));
        });

    });


    describe('jelcz directive', function ()
    {
        describe('properly used', function ()
        {
            beforeEach(inject(function ($compile)
            {
                $compile(jelcz)(scope);
                buttons = [];
                var buttonElements = jelcz.find('jelcz').find('button');
                angular.forEach(buttonElements, function (button)
                {
                    buttons.push(button);
                });
            }));
            it('should display "You are in the bus" message', function ()
            {
                expect(jelcz.find('strong').text()).toBe('You are in the bus');
            });

            it('should display "I am fast bus! 12 km/h! Whoa!" message after click on "Drive" button', function ()
            {
                buttons[0].click();
                expect(jelcz.find('jelcz').find('h3').text()).toBe('I am fast bus! 12 km/h! Whoa!');
            });

            it('should display "Beeeep" alert message after click on "Emergency brake!" button', function ()
            {
                spyOn(window, 'alert');
                buttons[1].click();
                expect(window.alert).toHaveBeenCalledWith('Beeeeeeep!');
            });
        });

        describe('incorrectly used', function ()
        {
            it('should throw exception when vehicle or bus directives are not required', inject(function ($compile)
            {
                expect(function ()
                {
                    $compile(singleJelcz)(scope);
                }).toThrow();

            }));
        });


    });

});
