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

    function Image(e)
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

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Image.prototype.isFound = function ()
    {
        return this.element.isPresent();
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
        image: function (e)
        {
            return new Image(e);
        }
    };

    var elements = {
        input: {
            brand: element.bind(null, by.id('brand')),
            capacity: element.bind(null, by.id('capacity'))
        },
        text: {
            brand: element.bind(null, by.binding('brand')),
            capacity: element.bind(null, by.binding('capacity'))
        },
        button: {
            next: element.bind(null, by.id('nextButton')),
            back: element.bind(null, by.id('backButton'))
        },
        image: {
            secret: element.bind(null, by.css('img'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.getBrand = function ()
    {
        return helper.input(elements.input.brand()).getValue();
    };
    PageFragment.prototype.getCapacity = function ()
    {
        return helper.input(elements.input.capacity()).getValue();
    };

    PageFragment.prototype.getBrandText = function ()
    {
        return helper.text(elements.text.brand()).getValue();
    };
    PageFragment.prototype.getCapacityText = function ()
    {
        return helper.text(elements.text.capacity()).getValue();
    };

    PageFragment.prototype.setBrand = function (text)
    {
        return helper.input(elements.input.brand()).setValue(text);
    };
    PageFragment.prototype.setCapacity = function (text)
    {
        return helper.input(elements.input.capacity()).setValue(text);
    };

    PageFragment.prototype.clearBrand = function ()
    {
        return helper.input(elements.input.brand()).clearValue();
    };
    PageFragment.prototype.clearCapacity = function ()
    {
        return helper.input(elements.input.capacity()).clearValue();
    };

    PageFragment.prototype.clickNextButton = function ()
    {
        return helper.button(elements.button.next()).clickOn();
    };

    PageFragment.prototype.getPath = function ()
    {
        var re = new RegExp('/#(.*)');
        return browser.getCurrentUrl().then(function (url)
        {
            return re.exec(url)[1];
        });
    };

    PageFragment.prototype.isSecretImage = function ()
    {
        return helper.image(elements.image.secret()).isFound();
    };

    module.exports = PageFragment;
})();
