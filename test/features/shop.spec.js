var ShopApplication = require('./pageFragments/shopApplication.fragment.js');
var shopApplication = new ShopApplication();

describe('Shop application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('buy cakes', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
        });
        describe('one product', function ()
        {
            it('should display Cupcake', function ()
            {
                shopApplication.selectCupcake();
                shopApplication.buyCake();
                expect(shopApplication.getProducts()).toEqual(['Cupcake']);
            });

        });
        describe('many products', function ()
        {
            it('should display list of cakes', function ()
            {
                shopApplication.selectBrownie();
                shopApplication.buyCake();
                shopApplication.selectButterCake();
                shopApplication.buyCake();
                shopApplication.selectBanoffeePieCake();
                shopApplication.buyCake();
                shopApplication.selectChocolateCake();
                shopApplication.buyCake();
                shopApplication.selectKarpatka();
                shopApplication.buyCake();

                expect(shopApplication.getProducts()).toEqual(['Brownie', 'Butter cake', 'Banoffee pie', 'Chocolate cake', 'Karpatka']);
            });

        });
    });

    describe('buy sweets', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
        });

        describe('one product', function ()
        {
            it('should display Jawbreakers', function ()
            {
                shopApplication.selectJawbreakers();
                shopApplication.buySweet();

                expect(shopApplication.getProducts()).toEqual(['Jawbreakers']);
            });
        });

        describe('many products', function ()
        {
            it('should display list of sweets', function ()
            {
                shopApplication.selectJellyBellySweet();
                shopApplication.buySweet();
                shopApplication.selectMilkyWay();
                shopApplication.buySweet();
                shopApplication.selectNerds();
                shopApplication.buySweet();
                shopApplication.selectStarburst();
                shopApplication.buySweet();
                shopApplication.selectSugarDaddy();
                shopApplication.buySweet();

                expect(shopApplication.getProducts()).toEqual(['Jelly Belly', 'Skittles', 'Nerds', 'Starburst', 'Sugar Daddy']);
            });
        });
    });

    describe('buy cakes ans sweets', function ()
    {
        beforeEach(function ()
        {
            browser.get('/');
        });

        describe('one cake and one sweet', function ()
        {
            it('should display \'Brownie\' ans \'Nerds\' on purchased products list', function ()
            {
                shopApplication.selectBrownie();
                shopApplication.selectNerds();
                shopApplication.buyCake();
                shopApplication.buySweet();

                expect(shopApplication.getProducts()).toEqual(['Brownie', 'Nerds']);
            });

            describe('many cakes and sweets', function ()
            {
                it('should display list of cakes and sweets', function ()
                {
                    shopApplication.selectButterCake();
                    shopApplication.buyCake();
                    shopApplication.selectKarpatka();
                    shopApplication.buyCake();
                    shopApplication.selectNerds();
                    shopApplication.buySweet();
                    shopApplication.selectSugarDaddy();
                    shopApplication.buySweet();
                    shopApplication.selectChocolateCake();
                    shopApplication.buyCake();
                    shopApplication.selectMilkyWay();
                    shopApplication.buySweet();

                    expect(shopApplication.getProducts()).toEqual(['Butter cake', 'Karpatka', 'Nerds', 'Sugar Daddy', 'Chocolate cake', 'Skittles']);
                });

            });
        });
    });
});
