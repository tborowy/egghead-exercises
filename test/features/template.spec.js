var TemplateApplication = require('./pageFragments/templateApplication.fragment.js');
var templateApplication = new TemplateApplication();

describe('Template application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('template', function ()
    {
        it('should have urlTemplate', function ()
        {
            expect(templateApplication.getUrlTemplateContent()).toEqual(templateApplication.getTestTemplateContent());
        });
    });

    describe('title and content', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
        });

        it('should display "Beautiful weather" message', function ()
        {
            templateApplication.setTitle('Some button');
            templateApplication.setContent('Beautiful weather');
            templateApplication.clickButton();
            expect(templateApplication.getHiddenMessage()).toEqual('Beautiful weather');
        });

        it('should display "secret" message', function ()
        {
            templateApplication.setTitle('secret');
            templateApplication.setContent('Some text');
            templateApplication.clickButton();

            expect(templateApplication.getHiddenSecret()).toEqual('Good work! You display this secret!');
        });
    });
});
