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

    function TextField(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    TextInput.prototype.getValue = function ()
    {
        return this.element.getAttribute('value');
    };

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        },
        textField: function (e)
        {
            return new TextField(e);
        }
    };

    var elements = {
        input: {
            right: element.bind(null, by.id('rightInput')),
            left: element.bind(null, by.id('leftInput'))
        },
        text: {
            right: element.bind(null, by.id('rightText')),
            left: element.bind(null, by.id('leftText'))
        }
    };

    function PageFragment()
    {
    }

// get input value
    PageFragment.prototype.getLeftInputValue = function ()
    {
        return helper.input(elements.input.left()).getValue();
    };

    PageFragment.prototype.getRightInputValue = function ()
    {
        return helper.input(elements.input.right()).getValue();
    };

    PageFragment.prototype.clearAllInputs = function ()
    {
        helper.input(elements.input.right()).clearValue();
        helper.input(elements.input.left()).clearValue();
    };

// set input value
    PageFragment.prototype.setLeftInputValue = function (text)
    {
        return helper.input(elements.input.left()).setValue(text);
    };
    PageFragment.prototype.setRightInputValue = function (text)
    {
        return helper.input(elements.input.right()).setValue(text);
    };

//get text
    PageFragment.prototype.getLeftTextField = function ()
    {
        return helper.textField(elements.text.left()).getValue();
    };
    PageFragment.prototype.getRightTextField = function ()
    {
        return helper.textField(elements.text.right()).getValue();
    };

    module.exports = PageFragment;
})();
