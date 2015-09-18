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
        mainText: element.bind(null, by.id('mainText')),
        wordToReplace: element.bind(null, by.id('word'))
    },
    text: {
        header: element.bind(null, by.id('header'))
    }
};

function PageFragment()
{
}

// get input value
PageFragment.prototype.getMainTextInputValue = function ()
{
    return helper.input(elements.input.mainText()).getValue();
};

PageFragment.prototype.getWordToReplaceInputValue = function ()
{
    return helper.input(elements.input.wordToReplace()).getValue();
};

// clear input value
PageFragment.prototype.clearMainTextInputValue = function ()
{
    return helper.input(elements.input.mainText()).clearValue();
};

PageFragment.prototype.clearWordToReplaceInputValue = function ()
{
    return helper.input(elements.input.wordToReplace()).clearValue();
};

// set input value
PageFragment.prototype.setMainTextInputValue = function (text)
{
    return helper.input(elements.input.mainText()).setValue(text);
};
PageFragment.prototype.setWordToReplaceInputValue = function (text)
{
    return helper.input(elements.input.wordToReplace()).setValue(text);
};

//get text
PageFragment.prototype.getHeaderTextField = function ()
{
    return helper.textField(elements.text.header()).getValue();
};

module.exports = PageFragment;
