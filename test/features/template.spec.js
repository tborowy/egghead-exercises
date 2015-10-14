var TemplateApplication = require('./pageFragments/templateApplication.fragment.js');
var templateApplication = new TemplateApplication();

describe('Template application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('initialization', function ()
    {
        it('should display default order to "pizza"', function ()
        {
            expect(templateApplication.getOrder()).toEqual('pizza');
        });
        it('should set default quantity to 12', function ()
        {
            expect(templateApplication.getQuantity()).toEqual('12');
        });
        it('should set default template to ""', function ()
        {
            expect(templateApplication.getTemplate()).toEqual('');
        });

        it('should display "pizza x 12"', function ()
        {
            expect(templateApplication.getOrderContent()).toEqual('pizza x 12');
        });
    });

    describe('default template', function ()
    {
        beforeEach(function ()
        {
            templateApplication.clearOrder();
            templateApplication.clearQuantity();
            templateApplication.clearTemplate();
        });

        it('should display "orange x 3"', function ()
        {
            templateApplication.setOrder('orange');
            templateApplication.setQuantity(3);
            templateApplication.setTemplate('default');

            expect(templateApplication.getOrderContent()).toEqual('orange x 3');
        });

        it('should display "pasta x 5"', function ()
        {
            templateApplication.setOrder('pasta');
            templateApplication.setQuantity(5);
            templateApplication.setTemplate('some text');

            expect(templateApplication.getOrderContent()).toEqual('pasta x 5');
        });

    });

    describe('button template', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            templateApplication.clearOrder();
            templateApplication.clearQuantity();
        });

        it('should display "pasta x 2"', function ()
        {
            templateApplication.setOrder('pasta');
            templateApplication.setQuantity(2);
            templateApplication.setTemplate('button');
            templateApplication.clickButton();

            expect(templateApplication.getButtonContent()).toEqual('Your order: 2 pasta');
        });

        it('should display "spaghetti x 3"', function ()
        {
            templateApplication.setOrder('spaghetti');
            templateApplication.setQuantity(3);
            templateApplication.setTemplate('button');
            templateApplication.clickButton();

            expect(templateApplication.getButtonContent()).toEqual('Your order: 3 spaghetti');
        });
    });

    describe('table template', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
            templateApplication.clearOrder();
            templateApplication.clearQuantity();
        });

        it('should display "pasta x 2"', function ()
        {
            templateApplication.setOrder('pasta');
            templateApplication.setQuantity(2);
            templateApplication.setTemplate('table');

            expect(templateApplication.getTableContent()).toEqual([{
                order: 'pasta',
                quantity: '2'
            }]);
        });

        it('should display "spaghetti x 3"', function ()
        {
            templateApplication.setOrder('spaghetti');
            templateApplication.setQuantity(3);
            templateApplication.setTemplate('table');

            expect(templateApplication.getTableContent()).toEqual([{
                order: 'spaghetti',
                quantity: '3'
            }]);
        });


    });


});
