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
    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        button: function (e)
        {
            return new Button(e);
        }
    };

    var elements = {
        message: element.bind(null, by.tagName('h2')),
        button: element.bind(null, by.tagName('button')),
        buttonMessage: element.bind(null, by.tagName('h3'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getMessage = function ()
    {
        return helper.text(elements.message()).getValue();
    };

    PageFragment.prototype.getButtonMessage = function ()
    {
        return helper.text(elements.buttonMessage()).getValue();
    };
    PageFragment.prototype.clickButton = function ()
    {
        return helper.button(elements.button()).clickOn();
    };


    module.exports = PageFragment;
})();
