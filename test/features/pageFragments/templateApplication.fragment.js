(function ()
{
    'use strict';

    var fs = require('fs');

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

    function File(e)
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

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    File.prototype.getContent = function ()
    {
        return fs.readFileSync(this.element, 'utf8').replace(/\n/g, '').replace(/\r/g, '').replace(/ /g, '');
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
        },
        file: function (e)
        {
            return new File(e);
        }

    };

    var elements = {
        input: {
            title: element.bind(null, by.id('title')),
            content: element.bind(null, by.id('content'))
        },
        button: element.bind(null, by.id('button')),
        message: element.bind(null, by.css('url h3')),
        secret: element.bind(null, by.css('url .text-success'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.setTitle = function (text)
    {
        return helper.input(elements.input.title()).setValue(text);
    };

    PageFragment.prototype.setContent = function (text)
    {
        return helper.input(elements.input.content()).setValue(text);
    };

    PageFragment.prototype.clickButton = function ()
    {
        return helper.button(elements.button()).clickOn();
    };

    PageFragment.prototype.getHiddenMessage = function ()
    {
        return helper.text(elements.message()).getValue();
    };

    PageFragment.prototype.getHiddenSecret = function ()
    {
        return helper.text(elements.secret()).getValue();
    };

    PageFragment.prototype.getUrlTemplateContent = function ()
    {
        return helper.file('app/urlTemplate.html').getContent();
    };

    PageFragment.prototype.getTestTemplateContent = function ()
    {
        return helper.file('test/features/pageFragments/testTemplate.html').getContent();
    };

    module.exports = PageFragment;
})();
