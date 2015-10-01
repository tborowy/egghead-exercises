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

    function Box(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Select(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function Square(e)
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

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    Box.prototype.isFound = function ()
    {
        return this.element.isPresent();
    };

    Square.prototype.getColor = function ()
    {
        return this.element.getCssValue('background-color');
    };

    Select.prototype.selectOption = function (item)
    {
        var desiredOption = null;
        return this.element.all(protractor.By.tagName('option')).getWebElements().then(function (options)
        {
            options.some(function (option)
            {
                option.getText().then(function (text)
                {
                    if (item === text) {
                        desiredOption = option;
                        return true;
                    }
                    return false;
                });
            });
        }).then(function ()
        {
            if (desiredOption) {
                return desiredOption.click();
            }
            return null;
        });
    };

    Button.prototype.clickOn= function ()
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
        box: function (e)
        {
            return new Box(e);
        },
        select: function (e)
        {
            return new Select(e);
        },
        square: function (e)
        {
            return new Square(e);
        },
        button: function (e)
        {
            return new Button(e);
        }
    };

    var elements = {
        box: {
            small: element.bind(null, by.css('box[size="50px"][color][open]')),
            medium: element.bind(null, by.css('box[size="70px"][color][open]')),
            big: element.bind(null, by.css('box[size="90px"][color][open]'))
        },
        header: {
            smallBox: element.bind(null, by.css('box[size="50px"][color][open] #panelName')),
            mediumBox: element.bind(null, by.css('box[size="70px"][color][open] #panelName')),
            bigBox: element.bind(null, by.css('box[size="90px"][color][open] #panelName'))
        },
        button: {
            smallBox: element.bind(null, by.css('box[size="50px"][color][open] button')),
            mediumBox: element.bind(null, by.css('box[size="70px"][color][open] button')),
            bigBox: element.bind(null, by.css('box[size="90px"][color][open] button'))
        },
        input: {
            smallBox: element.bind(null, by.css('box[size="50px"][color][open] input')),
            mediumBox: element.bind(null, by.css('box[size="70px"][color][open] input')),
            bigBox: element.bind(null, by.css('box[size="90px"][color][open] input'))
        },
        select: {
            smallBox: element.bind(null, by.css('box[size="50px"][color][open] select')),
            mediumBox: element.bind(null, by.css('box[size="70px"][color][open] select')),
            bigBox: element.bind(null, by.css('box[size="90px"][color][open] select'))
        },
        square: {
            small: element.bind(null, by.css('box[size="50px"][color][open] .square')),
            medium: element.bind(null, by.css('box[size="70px"][color][open] .square')),
            big: element.bind(null, by.css('box[size="90px"][color][open] .square'))
        }
    };

    function PageFragment()
    {
    }

    //box size
    PageFragment.prototype.isSmallBox = function ()
    {
        return helper.box(elements.box.small()).isFound();
    };
    PageFragment.prototype.isMediumBox = function ()
    {
        return helper.box(elements.box.medium()).isFound();
    };
    PageFragment.prototype.isBigBox = function ()
    {
        return helper.box(elements.box.big()).isFound();
    };

    //clear box name
    PageFragment.prototype.clearSmallBoxName = function ()
    {
        return helper.input(elements.input.smallBox()).clearValue();
    };
    PageFragment.prototype.clearMediumBoxName = function ()
    {
        return helper.input(elements.input.mediumBox()).clearValue();
    };
    PageFragment.prototype.clearBigBoxName = function ()
    {
        return helper.input(elements.input.bigBox()).clearValue();
    };

    //get box name
    PageFragment.prototype.getSmallBoxName = function ()
    {
        return helper.text(elements.header.smallBox()).getValue();
    };
    PageFragment.prototype.getMediumBoxName = function ()
    {
        return helper.text(elements.header.mediumBox()).getValue();
    };
    PageFragment.prototype.getBigBoxName = function ()
    {
        return helper.text(elements.header.bigBox()).getValue();
    };

    //set box name
    PageFragment.prototype.setSmallBoxName = function (text)
    {
        return helper.input(elements.input.smallBox()).setValue(text);
    };
    PageFragment.prototype.setMediumBoxName = function (text)
    {
        return helper.input(elements.input.mediumBox()).setValue(text);
    };
    PageFragment.prototype.setBigBoxName = function (text)
    {
        return helper.input(elements.input.bigBox()).setValue(text);
    };

    //select box color
    PageFragment.prototype.selectSmallBoxColor = function (text)
    {
        return helper.select(elements.select.smallBox()).selectOption(text);
    };
    PageFragment.prototype.selectMediumBoxColor = function (text)
    {
        return helper.select(elements.select.mediumBox()).selectOption(text);
    };
    PageFragment.prototype.selectBigBoxColor = function (text)
    {
        return helper.select(elements.select.bigBox()).selectOption(text);
    };

    //get box color
    PageFragment.prototype.getSmallBoxColor = function ()
    {
        return helper.square(elements.square.small()).getColor();
    };
    PageFragment.prototype.getMediumBoxColor = function ()
    {
        return helper.square(elements.square.medium()).getColor();
    };
    PageFragment.prototype.getBigBoxColor = function ()
    {
        return helper.square(elements.square.big()).getColor();
    };

    //click button
    PageFragment.prototype.clickSmallBoxButton= function ()
    {
        return helper.button(elements.button.smallBox()).clickOn();
    };
    PageFragment.prototype.clickMediumBoxButton = function ()
    {
        return helper.button(elements.button.mediumBox()).clickOn();
    };
    PageFragment.prototype.clickBigBoxButton= function ()
    {
        return helper.button(elements.button.bigBox()).clickOn();
    };

    //alert
    PageFragment.prototype.confirmAlert = function ()
    {
        return browser.switchTo().alert().accept();
    };
    PageFragment.prototype.getAlertMessage = function ()
    {
        return browser.switchTo().alert().getText();
    };

    module.exports = PageFragment;
})();
