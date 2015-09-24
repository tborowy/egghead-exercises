var ControllerApplication = require('./pageFragments/controllerApplication.fragment.js');
var controllerApplication = new ControllerApplication();

describe('Controller application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should set the left input to "I update both inputs"', function ()
        {
            expect(controllerApplication.getLeftInputValue()).toBe('I update both inputs');
        });
        it('should set the right input to "I update both inputs"', function ()
        {
            expect(controllerApplication.getRightInputValue()).toBe('I update both inputs');
        });
    });

    describe('when some text is entered ', function ()
    {
        describe('to left input', function ()
        {
            beforeAll(function ()
            {
                controllerApplication.clearAllInputs();
                controllerApplication.setLeftInputValue('Test text');
            });

            it('should set the right input to "Test text"', function ()
            {
                expect(controllerApplication.getRightInputValue()).toBe('Test text');
            });
            it('should set the right text filed to "Test text"', function ()
            {
                expect(controllerApplication.getRightTextField()).toBe('Test text');
            });
            it('should set the left text filed to "Test text"', function ()
            {
                expect(controllerApplication.getLeftTextField()).toBe('Test text');
            });
        });
        describe('to right input', function ()
        {
            beforeAll(function ()
            {
                controllerApplication.clearAllInputs();
                controllerApplication.setRightInputValue('I write some text...');
            });

            it('should set the left input to "I write some text..."', function ()
            {
                expect(controllerApplication.getLeftInputValue()).toBe('I write some text...');
            });
            it('should set the left text filed to "I write some text..."', function ()
            {
                expect(controllerApplication.getLeftTextField()).toBe('I write some text...');
            });
            it('should set the right text filed to "I write some text..."', function ()
            {
                expect(controllerApplication.getRightTextField()).toBe('I write some text...');
            });
        });
    });
});
