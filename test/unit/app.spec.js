describe('routeProvider', function ()
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
        it('should have "RouteCtrl" controller', function ()
        {
            expect(route.routes['/'].controller).toBe('RouteCtrl');
        });

        it('should have "home.html" view', function ()
        {
            expect(route.routes['/'].templateUrl).toBe('home.html');
        });
    });
});

