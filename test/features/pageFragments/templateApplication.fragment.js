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

    function Table(e)
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

    TextInput.prototype.setValue = function (text)
    {
        return this.element.sendKeys(text);
    };

    TextInput.prototype.clearValue = function ()
    {
        return this.element.clear();
    };

    TextInput.prototype.getValue = function ()
    {
        return this.element.getAttribute('value');
    };

    Button.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Table.prototype.getContent = function (tableSelector, columnSelector, colNames)
    {
        return this.element.all(by.css(tableSelector)).map(function (row)
        {
            var columns = row.all(by.css(columnSelector));
            return columns.then(function (cols)
            {
                var result = {};
                cols.forEach(function (col, idx)
                {
                    result[colNames[idx]] = col.getText();
                });
                return result;
            });
        });
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
        table: function (e)
        {
            return new Table(e);
        }
    };

    var elements = {
        input: {
            order: element.bind(null, by.css('#order')),
            quantity: element.bind(null, by.css('#quantity')),
            template: element.bind(null, by.css('#template'))
        },
        template: {
            default: element.bind(null, by.css('#default')),
            button: element.bind(null, by.css('#button')),
            table: element.bind(null, by.css('#table'))
        },
        content: {
            default: element.bind(null, by.css('#defaultContent')),
            button: element.bind(null, by.css('#buttonContent')),
            table: element.bind(null, by.css('#tableContent'))
        },
        button: element.bind(null, by.css('#buttonTemplate'))

    };

    function PageFragment()
    {
    }

    PageFragment.prototype.setOrder = function (text)
    {
        return helper.input(elements.input.order()).setValue(text);
    };
    PageFragment.prototype.setQuantity = function (text)
    {
        return helper.input(elements.input.quantity()).setValue(text);
    };
    PageFragment.prototype.setTemplate = function (text)
    {
        return helper.input(elements.input.template()).setValue(text);
    };

    PageFragment.prototype.clearOrder = function ()
    {
        return helper.input(elements.input.order()).clearValue();
    };
    PageFragment.prototype.clearQuantity = function ()
    {
        return helper.input(elements.input.quantity()).clearValue();
    };
    PageFragment.prototype.clearTemplate = function ()
    {
        return helper.input(elements.input.template()).clearValue();
    };

    PageFragment.prototype.getOrder = function ()
    {
        return helper.input(elements.input.order()).getValue();
    };
    PageFragment.prototype.getQuantity = function ()
    {
        return helper.input(elements.input.quantity()).getValue();
    };
    PageFragment.prototype.getTemplate = function ()
    {
        return helper.input(elements.input.template()).getValue();
    };

    PageFragment.prototype.getOrderContent = function ()
    {
        return helper.text(elements.content.default()).getValue();
    };
    PageFragment.prototype.getButtonContent = function ()
    {
        return helper.text(elements.content.button()).getValue();
    };
    PageFragment.prototype.getTableContent = function ()
    {
        return helper.table(elements.content.table()).getContent('tbody tr', 'td', ['order', 'quantity']);
    };
    PageFragment.prototype.clickButton = function ()
    {
        return helper.button(elements.button()).clickOn();
    };

    module.exports = PageFragment;
})();
