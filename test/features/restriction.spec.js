var RestrictionApplication = require('./pageFragments/restrictionApplication.fragment.js');
var restrictionApplication = new RestrictionApplication();

describe('Restriction application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('alert message', function ()
    {
        afterEach(function ()
        {
            restrictionApplication.confirmAlert();
        });
        it('should display alert message', function ()
        {
            expect(restrictionApplication.getAlertMessage()).toEqual('Restrict M: working...');
        });
    });
    describe('bar messages', function ()
    {
        it('should display message in green bar', function ()
        {
            expect(restrictionApplication.getRestrictEValue()).toEqual('E: this directive use restrict E');
        });
        it('should display message in red bar', function ()
        {
            expect(restrictionApplication.getRestrictAValue()).toEqual('A: this directive use restrict A');
        });
        it('should display message in blue bar', function ()
        {
            expect(restrictionApplication.getRestrictCValue()).toEqual('C: this directive use restrict C');
        });
    });
});
