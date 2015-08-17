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
            it('should have "routeCtrl" controller', function ()
            {
                expect(route.routes['/secret'].controller).toBe('routeCtrl');

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

        describe('otherwise', function ()
        {
            it('should redirect to "/" path', function ()
            {
                expect(route.routes[null].redirectTo).toBe('/');

            });
        });
    });

});

