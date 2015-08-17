describe('restrict', function ()
{
    'use strict';
    var route;

    beforeEach(module('app'));

    beforeEach(inject(function ($route)
    {
        route = $route;
    }));

    describe('route', function ()
    {
        describe('"/" path', function ()
        {
            it('should have "homeCtrl" controller', function ()
            {
                expect(route.routes['/'].controller).toBe('homeCtrl');

            });

            it('should have "home.html" view', function ()
            {
                expect(route.routes['/'].templateUrl).toBe('views/home.html');

            });
        });

        describe('"/secret"', function ()
        {
            it('should not have controller', function ()
            {
                expect(route.routes['/secret'].controller).toBe(undefined);

            });
            it('should have "secret.html" view', function ()
            {
                expect(route.routes['/secret'].templateUrl).toBe('views/secret.html');

            });
        });

        describe('/details', function ()
        {
            it('should have "routeCtrl" controller', function ()
            {
                expect(route.routes['/details/:brand/:capacity'].controller).toBe('routeCtrl');

            });
            it('should have "detail.html" view', function ()
            {
                expect(route.routes['/details/:brand/:capacity'].templateUrl).toBe('views/details.html');

            });
        });
        describe('/inputs', function ()
        {
            it('should not have controller', function ()
            {
                expect(route.routes['/inputs/:brand?/:capacity?'].controller).toBe(undefined);

            });

            describe('when brand and capacity were entered', function ()
            {
                it('should redirect to details', function ()
                {
                    expect(route.routes['/inputs/:brand?/:capacity?'].redirectTo({brand: 'Ferrari', capacity: '3.5'},
                            '/inputs/Ferrari/3.5')).toBe('/details/Ferrari/3.5');

                });

                it('should redirect to secret when brand is "special"', function ()
                {
                    expect(route.routes['/inputs/:brand?/:capacity?'].redirectTo({brand: 'special', capacity: '3.5'}, '/inputs/special/3.5')).toBe('/secret');

                });
                it('should redirect to secret when capacity is "special"', function ()
                {
                    expect(route.routes['/inputs/:brand?/:capacity?'].redirectTo({brand: 'Ferrari', capacity: 'special'},
                            '/inputs/Ferrari/special')).toBe('/secret');

                });

            });

        });

        describe('otherwise', function ()
        {
            it('should redirect to "/" path', function ()
            {
                expect(route.routes[null].redirectTo).toBe('/');

            });
        });
    });

});

