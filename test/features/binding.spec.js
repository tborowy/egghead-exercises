var BindingApplication = require('./fragments/pageFragments/bindingApplication.fragment.js');
var bindingApplication = new BindingApplication();

describe('Binding application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should have first input empty on startup', function ()
        {
            return bindingApplication.isFirstTextInputEmpty().then(function (result)
            {
                expect(result).toBe('');
            });
        });

        it('should have second input empty on startup', function ()
        {
            return bindingApplication.isSecondTextInputEmpty().then(function (result)
            {
                expect(result).toBe('');
            });
        });

        it('should have third input empty on startup', function ()
        {
            return bindingApplication.isThirdTextInputEmpty().then(function (result)
            {
                expect(result).toBe('');
            });
        });

    });
    describe('when bootstrap class name is entered', function ()
    {
        describe('to first input', function ()
        {
            beforeAll(function ()
            {
                bindingApplication.setFirstInputText('info');
            });
            afterAll(function ()
            {
                bindingApplication.clearFirstInputText('');
            });

            it('should display the first row with "info" class', function ()
            {
                expect(bindingApplication.getFirstRowClass()).toEqual('info');
            });
            it('should display the second row without "info" class', function ()
            {
                expect(bindingApplication.getSecondRowClass()).toEqual('');
            });
            it('should display the third row without "info" class', function ()
            {
                expect(bindingApplication.getThirdRowClass()).toEqual('');
            });
        });

        describe('to second input', function ()
        {
            beforeAll(function ()
            {
                bindingApplication.setSecondInputText('success');
            });
            afterAll(function ()
            {
                bindingApplication.clearSecondInputText('');
            });

            it('should display the first row without "success" class', function ()
            {
                expect(bindingApplication.getFirstRowClass()).toEqual('');
            });
            it('should display the second row with "success" class', function ()
            {
                expect(bindingApplication.getSecondRowClass()).toEqual('success');
            });
            it('should display the third row without "success" class', function ()
            {
                expect(bindingApplication.getThirdRowClass()).toEqual('');
            });
        });
        describe('to third input', function ()
        {
            beforeAll(function ()
            {
                bindingApplication.setThirdInputText('danger');

            });
            afterAll(function ()
            {
                bindingApplication.clearThirdInputText('');
            });

            it('should display the first row without "danger" class', function ()
            {
                expect(bindingApplication.getFirstRowClass()).toEqual('');
            });
            it('should display the first row without "danger" class', function ()
            {
                expect(bindingApplication.getSecondRowClass()).toEqual('');
            });
            it('should display the third row with "danger" class', function ()
            {
                expect(bindingApplication.getThirdRowClass()).toEqual('danger');
            });
        });
        describe('to all three inputs', function ()
        {
            beforeAll(function ()
            {
                bindingApplication.setFirstInputText('success');
                bindingApplication.setSecondInputText('danger');
                bindingApplication.setThirdInputText('info');
            });

            it('should display the first row without "success" class', function ()
            {
                expect(bindingApplication.getFirstRowClass()).toEqual('success');
            });
            it('should display the first row without "danger" class', function ()
            {
                expect(bindingApplication.getSecondRowClass()).toEqual('danger');
            });
            it('should display the third row with "info" class', function ()
            {
                expect(bindingApplication.getThirdRowClass()).toEqual('info');
            });
        });
    });
});
