var RouteApplication = require('./pageFragments/routeApplication.fragment.js');
var routeApplication = new RouteApplication();

describe('Route application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('routing', function ()
    {
        it('should display message', function ()
        {
            expect(routeApplication.getMessage()).toEqual('Good job! You did it!');
        });
        it('should display button message in green bar', function ()
        {
            routeApplication.clickButton();
            expect(routeApplication.getButtonMessage()).toEqual('I came from a RouteCtrl');
        });
    });
});
