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

    function TextInput(e)
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

    TextInput.prototype.setValue = function (value)
    {
        return this.element.sendKeys(value);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
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
        input: function (e)
        {
            return new TextInput(e);
        },
        button: function (e)
        {
            return new Button(e);
        }
    };

    var elements = {
        sum: {
            firstNumber: element.bind(null, by.id('firstNumberSum')),
            secondNumber: element.bind(null, by.id('secondNumberSum')),
            button: element.bind(null, by.id('sumButton')),
            result: element.bind(null, by.id('sumResult'))
        },
        sub: {
            firstNumber: element.bind(null, by.id('firstNumberSub')),
            secondNumber: element.bind(null, by.id('secondNumberSub')),
            button: element.bind(null, by.id('subButton')),
            result: element.bind(null, by.id('subResult'))
        },
        multi: {
            firstNumber: element.bind(null, by.id('firstNumberMulti')),
            secondNumber: element.bind(null, by.id('secondNumberMulti')),
            button: element.bind(null, by.id('multiButton')),
            result: element.bind(null, by.id('multiResult'))
        },
        divide: {
            firstNumber: element.bind(null, by.id('firstNumberDiv')),
            secondNumber: element.bind(null, by.id('secondNumberDiv')),
            button: element.bind(null, by.id('divideButton')),
            result: element.bind(null, by.id('divideResult'))
        }
    };

    function PageFragment()
    {
    }

    //clear input
    PageFragment.prototype.clearSumFirstNumber = function (value)
    {
        return helper.input(elements.sum.firstNumber()).clearValue(value);
    };

    PageFragment.prototype.clearSumSecondNumber = function (value)
    {
        return helper.input(elements.sum.secondNumber()).clearValue(value);
    };

    PageFragment.prototype.clearSubFirstNumber = function (value)
    {
        return helper.input(elements.sub.firstNumber()).clearValue(value);
    };

    PageFragment.prototype.clearSubSecondNumber = function (value)
    {
        return helper.input(elements.sub.secondNumber()).clearValue(value);
    };

    PageFragment.prototype.clearMultiFirstNumber = function (value)
    {
        return helper.input(elements.multi.firstNumber()).clearValue(value);
    };

    PageFragment.prototype.clearMultiSecondNumber = function (value)
    {
        return helper.input(elements.multi.secondNumber()).clearValue(value);
    };

    PageFragment.prototype.clearDivideFirstNumber = function (value)
    {
        return helper.input(elements.divide.firstNumber()).clearValue(value);
    };

    PageFragment.prototype.clearDivideSecondNumber = function (value)
    {
        return helper.input(elements.divide.secondNumber()).clearValue(value);
    };

    //set input
    PageFragment.prototype.setSumFirstNumber = function (value)
    {
        return helper.input(elements.sum.firstNumber()).setValue(value);
    };

    PageFragment.prototype.setSumSecondNumber = function (value)
    {
        return helper.input(elements.sum.secondNumber()).setValue(value);
    };

    PageFragment.prototype.setSubFirstNumber = function (value)
    {
        return helper.input(elements.sub.firstNumber()).setValue(value);
    };

    PageFragment.prototype.setSubSecondNumber = function (value)
    {
        return helper.input(elements.sub.secondNumber()).setValue(value);
    };

    PageFragment.prototype.setMultiFirstNumber = function (value)
    {
        return helper.input(elements.multi.firstNumber()).setValue(value);
    };

    PageFragment.prototype.setMultiSecondNumber = function (value)
    {
        return helper.input(elements.multi.secondNumber()).setValue(value);
    };

    PageFragment.prototype.setDivideFirstNumber = function (value)
    {
        return helper.input(elements.divide.firstNumber()).setValue(value);
    };

    PageFragment.prototype.setDivideSecondNumber = function (value)
    {
        return helper.input(elements.divide.secondNumber()).setValue(value);
    };

    //get result
    PageFragment.prototype.getSumResult = function ()
    {
        return helper.text(elements.sum.result()).getValue();
    };
    PageFragment.prototype.getSubResult = function ()
    {
        return helper.text(elements.sub.result()).getValue();
    };
    PageFragment.prototype.getMultiResult = function ()
    {
        return helper.text(elements.multi.result()).getValue();
    };
    PageFragment.prototype.getDivideResult = function ()
    {
        return helper.text(elements.divide.result()).getValue();
    };

    // click button
    PageFragment.prototype.clickSumButton = function ()
    {
        return helper.button(elements.sum.button()).clickOn();
    };
    PageFragment.prototype.clickSubButton = function ()
    {
        return helper.button(elements.sub.button()).clickOn();
    };
    PageFragment.prototype.clickMultiButton = function ()
    {
        return helper.button(elements.multi.button()).clickOn();
    };
    PageFragment.prototype.clickDivideButton = function ()
    {
        return helper.button(elements.divide.button()).clickOn();
    };


    module.exports = PageFragment;
})();
