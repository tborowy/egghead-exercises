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

    function Square(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Petal(e)
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

    TextField.prototype.moveMouse = function ()
    {
        browser.actions().mouseMove(this.element).perform();
    };

    Square.prototype.moveMouse = function ()
    {
        browser.actions().mouseMove(this.element).perform();
    };

    Square.prototype.isPresent = function ()
    {
        return this.element.isPresent();
    };

    Petal.prototype.count = function ()
    {
        return this.element.count();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        square: function (e)
        {
            return new Square(e);
        },
        petal: function (e)
        {
            return new Petal(e);
        }
    };

    var elements = {
        square: {
            green: element.bind(null, by.css('div[enter="addPetal()"][class~="bg-success"]')),
            red: element.bind(null, by.css('div[enter="removePetal()"][class~="bg-danger"]'))
        },
        petals: element.all.bind(null, by.css('span[ng-repeat]')),
        title: element.bind(null, by.tagName('h1'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.isGreenSquarePresent = function ()
    {
        return helper.square(elements.square.green()).isPresent();
    };

    PageFragment.prototype.isRedSquarePresent = function ()
    {
        return helper.square(elements.square.green()).isPresent();
    };

    PageFragment.prototype.moveMouseOnGreenSquare = function ()
    {
        return helper.square(elements.square.green()).moveMouse();
    };

    PageFragment.prototype.moveMouseOnRedSquare = function ()
    {
        return helper.square(elements.square.red()).moveMouse();
    };

    PageFragment.prototype.moveMouseOnHeader = function ()
    {
        return helper.text(elements.title()).moveMouse();
    };

    PageFragment.prototype.countPetals = function ()
    {
        return helper.petal(elements.petals()).count();
    };

    module.exports = PageFragment;
})();
