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

    function Select(e)
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
    TextField.prototype.isFound = function ()
    {
        return this.element.isPresent();
    };

    TextInput.prototype.getValue = function ()
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

    Select.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Button.prototype.getValue = function ()
    {
        return this.element.getText();
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
        select: function (e)
        {
            return new Select(e);
        },
        button: function (e)
        {
            return new Button(e);
        }
    };

    var elements = {
        input: {
            forWhat: element.bind(null, by.id('forWhat'))
        },
        select: {
            devote: element.bind(null, by.id('devote')),
            currentDevote: element.bind(null, by.css('#devote option[selected]'))
        },
        button: {
            toggle: element.bind(null, by.css('button[ng-click="toggleContent()"]'))
        },
        directive: {
            money: element.bind(null, by.css('money[how-many="proposal"][for-what]'))
        },
        text: {
            proposal: element.bind(null, by.id('proposal')),
            hidden: element.bind(null, by.id('message'))

        }
    };

    function PageFragment()
    {
    }

    // get input text
    PageFragment.prototype.getForWhatTextInput = function ()
    {
        return helper.input(elements.input.forWhat()).getValue();
    };

    // set input value
    PageFragment.prototype.setForWhatTextInput = function (text)
    {
        return helper.input(elements.input.forWhat()).setValue(text);
    };

     // select options
    PageFragment.prototype.selectMoneyValue = function (text)
    {
        return helper.select(elements.select.devote()).selectOption(text);
    };

    // clear input text
    PageFragment.prototype.clearForWhatTextInput = function ()
    {
        return helper.input(elements.input.forWhat()).clearValue();
    };

    //get selected value
    PageFragment.prototype.getHowMuchSelect = function ()
    {
        return helper.select(elements.select.currentDevote()).getValue();
    };

    //get text
    PageFragment.prototype.getProposalMessageValue = function ()
    {
        return helper.text(elements.text.proposal()).getValue();
    };
    PageFragment.prototype.getHiddenMessageValue = function ()
    {
        return helper.text(elements.text.hidden()).getValue();
    };
    PageFragment.prototype.isHiddenMessage = function ()
    {
        return helper.text(elements.text.hidden()).isFound();
    };
    PageFragment.prototype.getButtonText = function ()
    {
        return helper.button(elements.button.toggle()).getValue();
    };
    PageFragment.prototype.clickButton = function ()
    {
        return helper.button(elements.button.toggle()).clickOn();
    };


    module.exports = PageFragment;
})();
