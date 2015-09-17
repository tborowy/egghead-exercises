/*global element,by*/
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
        seller: element.bind(null, by.id('seller')),
        name: element.bind(null, by.id('name')),
        count: element.bind(null, by.id('count'))
    },
    message: element.bind(null, by.id('message')),
    order: element.bind(null, by.id('order')),
    heading: element.bind(null, by.css('h1'))
};

function PageFragment()
{
}

// get input value
PageFragment.prototype.getSellerInputValue = function ()
{
    return helper.input(elements.input.seller()).getValue();
};

PageFragment.prototype.getNameInputValue = function ()
{
    return helper.input(elements.input.name()).getValue();
};

PageFragment.prototype.getCountInputValue = function ()
{
    return helper.input(elements.input.count()).getValue();
};

// get input value
PageFragment.prototype.clearAllInputs = function ()
{
    helper.input(elements.input.seller()).clearValue();
    helper.input(elements.input.name()).clearValue();
    helper.input(elements.input.count()).clearValue();
};

PageFragment.prototype.getNameInputValue = function ()
{
    return helper.input(elements.input.name()).getValue();
};

PageFragment.prototype.getCountInputValue = function ()
{
    return helper.input(elements.input.count()).getValue();
};

// set input value
PageFragment.prototype.setSellerInput = function (text)
{
    return helper.input(elements.input.seller()).setValue(text);
};
PageFragment.prototype.setNameInput = function (text)
{
    return helper.input(elements.input.name()).setValue(text);
};
PageFragment.prototype.setCountInput = function (text)
{
    return helper.input(elements.input.count()).setValue(text);
};

//get text
PageFragment.prototype.getMessage = function ()
{
    return helper.textField(elements.message()).getValue();
};
PageFragment.prototype.getOrder = function ()
{
    return helper.textField(elements.order()).getValue();
};
PageFragment.prototype.getHeading = function ()
{
    return helper.textField(elements.heading()).getValue();
};

module.exports = PageFragment;
