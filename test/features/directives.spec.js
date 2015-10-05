var DirectivesApplication = require('./pageFragments/directivesApplication.fragment.js');
var directivesApplication = new DirectivesApplication();

describe('Directives application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('circle', function ()
    {
        it('should have enter directive set to \'btn-danger\'', function ()
        {
            expect(directivesApplication.getCircleWithEnterDirective()).toEqual('btn-danger');
        });
        it('should have leave directive set to \'btn-danger\'', function ()
        {
            expect(directivesApplication.getCircleWithLeaveDirective()).toEqual('btn-danger');
        });
    });
    describe('square', function ()
    {
        it('should have click-on directive set to \'btn-info\'', function ()
        {
            expect(directivesApplication.getSquareWithClickOnDirective()).toEqual('btn-info');
        });
        it('should have db-click-on directive set to \'btn-info\'', function ()
        {
            expect(directivesApplication.getSquareWithDbClickOnDirective()).toEqual('btn-info');
        });
    });
});
