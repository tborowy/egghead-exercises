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

    function Button(e)
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

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        },
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
        unit : {
            input: element.bind(null, by.css('[id=unit][ng-model=input]')),
            message: element.bind(null, by.css('.text-success[ng-bind="ctrl.unitScopeValue"]')),
            button: element.bind(null, by.id('unitButton'))
        },
        separate : {
            input: element.bind(null, by.css('[id=separate][ng-model=input]')),
            message: element.bind(null, by.css('.text-danger[ng-bind="ctrl.separateScopeValue"]')),
            button: element.bind(null, by.id('separateButton'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getUnitInputValue = function ()
    {
        return helper.input(elements.unit.input()).getValue();
    };
    PageFragment.prototype.getSeparateInputValue = function ()
    {
        return helper.input(elements.separate.input()).getValue();
    };
    PageFragment.prototype.setUnitInputValue = function (text)
    {
        return helper.input(elements.unit.input()).setValue(text);
    };
    PageFragment.prototype.setSeparateInputValue = function (text)
    {
        return helper.input(elements.separate.input()).setValue(text);
    };
    PageFragment.prototype.clearUnitInputValue = function ()
    {
        return helper.input(elements.unit.input()).clearValue();
    };
    PageFragment.prototype.clearSeparateInputValue = function ()
    {
        return helper.input(elements.separate.input()).clearValue();
    };

    PageFragment.prototype.clickUnitButton = function ()
    {
        return helper.button(elements.unit.button()).clickOn();
    };
    PageFragment.prototype.clickSeparateButton = function ()
    {
        return helper.button(elements.separate.button()).clickOn();
    };

    PageFragment.prototype.getUnitTextValue = function ()
    {
        return helper.input(elements.unit.message()).getValue();
    };
    PageFragment.prototype.getSeparateTextValue = function ()
    {
        return helper.input(elements.separate.message()).getValue();
    };

    module.exports = PageFragment;
})();
