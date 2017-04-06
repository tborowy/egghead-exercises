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

    function Table(e)
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

    Table.prototype.getRowsAmount = function ()
    {
        return this.element.all(by.css('tbody tr')).count();
    };

    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        },
        table: function (e)
        {
            return new Table(e);
        }
    };

    var elements = {
        input: {
            search: element.bind(null, by.id('search')),
            firstName: element.bind(null, by.id('first')),
            lastName: element.bind(null, by.id('last')),
            age: element.bind(null, by.id('age')),
            email: element.bind(null, by.id('email')),
            phone: element.bind(null, by.id('phone'))
        },
        table: element.bind(null, by.id('students'))
    };

    function PageFragment()
    {
    }

// clear inputs
    PageFragment.prototype.clearAllInputs = function ()
    {
        helper.input(elements.input.search()).clearValue();
        helper.input(elements.input.firstName()).clearValue();
        helper.input(elements.input.lastName()).clearValue();
        helper.input(elements.input.age()).clearValue();
        helper.input(elements.input.email()).clearValue();
        helper.input(elements.input.phone()).clearValue();
    };

    PageFragment.prototype.clearSearchInput = function ()
    {
        helper.input(elements.input.search()).clearValue();
    };
    PageFragment.prototype.clearFirstNameInput = function ()
    {
        helper.input(elements.input.firstName()).clearValue();
    };
    PageFragment.prototype.clearLastNameInput = function ()
    {
        helper.input(elements.input.lastName()).clearValue();
    };
    PageFragment.prototype.clearAgeInput = function ()
    {
        helper.input(elements.input.age()).clearValue();
    };
    PageFragment.prototype.clearEmailInput = function ()
    {
        helper.input(elements.input.email()).clearValue();
    };
    PageFragment.prototype.clearPhoneInput = function ()
    {
        helper.input(elements.input.phone()).clearValue();
    };

// table
    PageFragment.prototype.getTableContent = function ()
    {
        return helper.table(elements.table()).getContent('tbody tr', 'td', ['firstName', 'lastName', 'age', 'email', 'phone']);
    };

    PageFragment.prototype.getNumberOfRows = function ()
    {
        return helper.table(elements.table()).getRowsAmount();
    };

// set input value
    PageFragment.prototype.setSearchInputValue = function (text)
    {
        return helper.input(elements.input.search()).setValue(text);
    };

    PageFragment.prototype.setFirstNameInputValue = function (text)
    {
        return helper.input(elements.input.firstName()).setValue(text);
    };
    PageFragment.prototype.setLastNameInputValue = function (text)
    {
        return helper.input(elements.input.lastName()).setValue(text);
    };
    PageFragment.prototype.setAgeInputValue = function (text)
    {
        return helper.input(elements.input.age()).setValue(text);
    };
    PageFragment.prototype.setEmailInputValue = function (text)
    {
        return helper.input(elements.input.email()).setValue(text);
    };
    PageFragment.prototype.setPhoneInputValue = function (text)
    {
        return helper.input(elements.input.phone()).setValue(text);
    };

    module.exports = PageFragment;
})();
