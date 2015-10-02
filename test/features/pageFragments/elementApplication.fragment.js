(function ()
{
    'use strict';

    function TextInput(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Element(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }


    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    Element.prototype.isFound = function ()
    {
        return this.element.isPresent();
    };

    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        },
        element: function (e)
        {
            return new Element(e);
        }
    };

    var elements = {
        input: element.bind(null, by.css('input')),
        circle: element.bind(null, by.css('h4[class=circle]')),
        square: element.bind(null, by.css('h4[class=square]'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getInputValue = function ()
    {
        return helper.input(elements.input()).getValue();
    };

    PageFragment.prototype.setInputValue = function (text)
    {
        return helper.input(elements.input()).setValue(text);
    };
    PageFragment.prototype.clearInputValue = function ()
    {
        return helper.input(elements.input()).clearValue();
    };


    PageFragment.prototype.isSquarePresent = function ()
    {
        return helper.element(elements.square()).isFound();
    };
    PageFragment.prototype.isCirclePresent = function ()
    {
        return helper.element(elements.circle()).isFound();
    };

    module.exports = PageFragment;
})();
