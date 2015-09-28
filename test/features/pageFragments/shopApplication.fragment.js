(function ()
{
    'use strict';

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Select(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Button(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    Select.prototype.selectOption = function (item)
    {
        var desiredOption = null;
        return this.element.all(protractor.By.tagName('option')).getWebElements().then(function (options)
        {
            options.some(function (option)
            {
                option.getText().then(function (text)
                {
                    if (item === text) {
                        desiredOption = option;
                        return true;
                    }
                    return false;
                });
            });
        }).then(function ()
        {
            if (desiredOption) {
                return desiredOption.click();
            }
            return null;
        });
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        select: function (e)
        {
            return new Select(e);
        },
        button: function (e)
        {
            return new Button(e);
        }
    };

    var elements = {
        select: {
            cakes: element.bind(null, by.css('#cakes order-component')),
            sweets: element.bind(null, by.css('#sweets order-component'))
        },
        button: {
            cakes: element.bind(null, by.css('#cakes #buyButton')),
            sweets: element.bind(null, by.css('#sweets #buyButton'))
        },
        products: element.all.bind(null, by.repeater('product in cart'))
    };

    function PageFragment()
    {
    }

    //select cakes
    PageFragment.prototype.selectBanoffeePieCake = function ()
    {
        return helper.select(elements.select.cakes()).selectOption('Banoffee pie');
    };
    PageFragment.prototype.selectBrownie = function ()
    {
        return helper.select(elements.select.cakes()).selectOption('Brownie');
    };
    PageFragment.prototype.selectButterCake = function ()
    {
        return helper.select(elements.select.cakes()).selectOption('Butter cake');
    };
    PageFragment.prototype.selectChocolateCake = function ()
    {
        return helper.select(elements.select.cakes()).selectOption('Chocolate cake');
    };
    PageFragment.prototype.selectCupcake = function ()
    {
        return helper.select(elements.select.cakes()).selectOption('Cupcake');
    };
    PageFragment.prototype.selectKarpatka = function ()
    {
        return helper.select(elements.select.cakes()).selectOption('Karpatka');
    };

    //select sweets
    PageFragment.prototype.selectSugarDaddy = function ()
    {
        return helper.select(elements.select.sweets()).selectOption('Sugar Daddy');
    };
    PageFragment.prototype.selectNerds = function ()
    {
        return helper.select(elements.select.sweets()).selectOption('Nerds');
    };
    PageFragment.prototype.selectJawbreakers = function ()
    {
        return helper.select(elements.select.sweets()).selectOption('Jawbreakers');
    };
    PageFragment.prototype.selectStarburst = function ()
    {
        return helper.select(elements.select.sweets()).selectOption('Starburst');
    };
    PageFragment.prototype.selectMilkyWay = function ()
    {
        return helper.select(elements.select.sweets()).selectOption('Skittles');
    };
    PageFragment.prototype.selectJellyBellySweet = function ()
    {
        return helper.select(elements.select.sweets()).selectOption('Jelly Belly');
    };

    //buttons
    PageFragment.prototype.buyCake = function ()
    {
        return helper.button(elements.button.cakes()).clickOn();
    };

    PageFragment.prototype.buySweet = function ()
    {
        return helper.button(elements.button.sweets()).clickOn();
    };

    //products list
    PageFragment.prototype.getProducts = function ()
    {
        return helper.text(elements.products()).getValue();
    };


    module.exports = PageFragment;
})();
