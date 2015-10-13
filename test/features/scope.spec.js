var ElementApplication = require('./pageFragments/scopeApplication.fragment.js');
var elementApplication = new ElementApplication();

describe('Scope application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should have empty input', function ()
        {
            expect(elementApplication.getUnitInputValue()).toEqual('');
        });
        it('should have empty input', function ()
        {
            expect(elementApplication.getSeparateInputValue()).toEqual('');
        });
    });

    describe('unit scope', function ()
    {
        beforeAll(function ()
        {
            elementApplication.clearUnitInputValue();
            elementApplication.clearSeparateInputValue();
            elementApplication.setUnitInputValue('John');
            elementApplication.clickUnitButton();
            elementApplication.clickSeparateButton();
        });
        it('should set unit message to "John"', function ()
        {
            expect(elementApplication.getUnitTextValue()).toEqual('John');
        });
        it('should not set separate message', function ()
        {
            expect(elementApplication.getSeparateTextValue()).toEqual('');
        });
    });

    describe('separate scope', function ()
    {
        beforeAll(function ()
        {
            elementApplication.clearUnitInputValue();
            elementApplication.clearSeparateInputValue();
            elementApplication.setSeparateInputValue('Jack');
            elementApplication.clickSeparateButton();
            elementApplication.clickUnitButton();
        });
        it('should set separate message to "Jack"', function ()
        {
            expect(elementApplication.getSeparateTextValue()).toEqual('Jack');
        });
        it('should not set unit message', function ()
        {
            expect(elementApplication.getUnitTextValue()).toEqual('');
        });
    });

    describe('unit and separate scope', function ()
    {
        beforeAll(function ()
        {
            elementApplication.clearUnitInputValue();
            elementApplication.clearSeparateInputValue();
            elementApplication.setUnitInputValue('Rose');
            elementApplication.setSeparateInputValue('Mike');
            elementApplication.clickUnitButton();
            elementApplication.clickSeparateButton();
        });
        it('should set unit message to "Rose"', function ()
        {
            expect(elementApplication.getUnitTextValue()).toEqual('Rose');
        });

        it('should set separate message to "Mike"', function ()
        {
            expect(elementApplication.getSeparateTextValue()).toEqual('Mike');
        });
    });


});
