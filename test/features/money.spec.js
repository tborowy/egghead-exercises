var MoneyApplication = require('./pageFragments/moneyApplication.fragment.js');
var moneyApplication = new MoneyApplication();

describe('Money application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should have "for what" input empty', function ()
        {
            expect(moneyApplication.getForWhatTextInput()).toEqual('');
        });
        it('should have set "how much" select for "10"', function ()
        {
            expect(moneyApplication.getHowMuchSelect()).toEqual('10');
        });
        it('should display "I want to devote: $10.00" message', function ()
        {
            expect(moneyApplication.getProposalMessageValue()).toEqual('I want to devote: $10.00');
        });
    });

    describe('"for what" input and button text', function ()
    {
        beforeEach(function ()
        {
            moneyApplication.clearForWhatTextInput();

        });
        it('should update button text to "For hungry cats"', function ()
        {
            moneyApplication.setForWhatTextInput('For hungry cats');
            expect(moneyApplication.getButtonText()).toEqual('For hungry cats');
        });
        it('should update button text to "For hungry dogs"', function ()
        {
            moneyApplication.setForWhatTextInput('For hungry dogs');
            expect(moneyApplication.getButtonText()).toEqual('For hungry dogs');
        });
    });

    describe('select and proposal message', function ()
    {
        it('should update proposal message to "I want to devote: $40.00"', function ()
        {
            moneyApplication.selectMoneyValue('40');
            expect(moneyApplication.getProposalMessageValue()).toEqual('I want to devote: $40.00');
        });
        it('should update proposal message to "I want to devote: $40.00"', function ()
        {
            moneyApplication.selectMoneyValue('60');
            expect(moneyApplication.getProposalMessageValue()).toEqual('I want to devote: $60.00');
        });
    });

    describe('hidden message', function ()
    {
        it('should show "Shut up and take my money!" message"', function ()
        {
            moneyApplication.clickButton();
            expect(moneyApplication.getHiddenMessageValue()).toEqual('Shut up and take my money!');
        });
        it('should hide "Shut up and take my money!" message', function ()
        {
            moneyApplication.clickButton();
            expect(moneyApplication.isHiddenMessage()).toBe(false);
        });
    });
});
