'use strict';

var elements = {
    input: {
        first: element.bind(null, by.id('first')),
        second: element.bind(null, by.id('second')),
        third: element.bind(null, by.id('third'))
    },
    row: {
        first: element.bind(null, by.id('firstRecord')),
        second: element.bind(null, by.id('secondRecord')),
        third: element.bind(null, by.id('thirdRecord'))
    }
};
function PageFragment()
{
}

// is input empty
PageFragment.prototype.isFirstTextInputEmpty = function ()
{
    return helper.input(elements.input.first()).getValue();
};

PageFragment.prototype.isSecondTextInputEmpty = function ()
{
    return helper.input(elements.input.second()).getValue();
};

PageFragment.prototype.isThirdTextInputEmpty = function ()
{
    return helper.input(elements.input.third()).getValue();
};

// set input value
PageFragment.prototype.setFirstInputText = function (text)
{
    return helper.input(elements.input.first()).setValue(text);
};
PageFragment.prototype.setSecondInputText = function (text)
{
    return helper.input(elements.input.second()).setValue(text);
};
PageFragment.prototype.setThirdInputText = function (text)
{
    return helper.input(elements.input.third()).setValue(text);
};

//clear input value

PageFragment.prototype.clearFirstInputText = function ()
{
    return helper.input(elements.input.first()).clearValue();
};
PageFragment.prototype.clearSecondInputText = function ()
{
    return helper.input(elements.input.second()).clearValue();
};
PageFragment.prototype.clearThirdInputText = function ()
{
    return helper.input(elements.input.third()).clearValue();
};


//get row class
PageFragment.prototype.getFirstRowClass = function (text)
{
    return helper.row(elements.row.first()).getClass(text);
};
PageFragment.prototype.getSecondRowClass = function (text)
{
    return helper.row(elements.row.second()).getClass(text);
};
PageFragment.prototype.getThirdRowClass = function (text)
{
    return helper.row(elements.row.third()).getClass(text);
};

function TextInput(e)
{
    if (null == e) {
        throw new Error('element must not be null');
    }
    this.element = e;
}

function Row(e)
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

TextInput.prototype.clearValue = function ()
{
    return this.element.clear();
};

TextInput.prototype.setValue = function (text)
{
    return this.element.sendKeys(text);
};

Row.prototype.getClass = function ()
{
    return this.element.getAttribute('class');
};

var helper = {
    input: function (e)
    {
        return new TextInput(e);
    },
    row: function (e)
    {
        return new Row(e);
    }
};

module.exports = PageFragment;
