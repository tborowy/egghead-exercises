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
        it('should have enter directive set to \'bg-danger\'', function ()
        {
            expect(directivesApplication.getCircleWithEnterDirective()).toEqual('bg-danger');
        });
        it('should have leave directive ', function ()
        {
            expect(directivesApplication.getCircleWithLeaveDirective()).toEqual('');
        });
    });
    describe('square', function ()
    {
        it('should have click-on directive set to \'bg-info\'', function ()
        {
            expect(directivesApplication.getSquareWithClickOnDirective()).toEqual('bg-info');
        });
        it('should have db-click-on directive', function ()
        {
            expect(directivesApplication.getSquareWithDbClickOnDirective()).toEqual('');
        });
    });
});
