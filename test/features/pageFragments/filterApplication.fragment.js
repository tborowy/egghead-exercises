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

    function RadioButton(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    function TableHeader(e)
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

    RadioButton.prototype.setValue = function ()
    {
        return this.element.click();
    };

    TableHeader.prototype.revert = function ()
    {
        return this.element.click();
    };

    var helper = {
        input: function (e)
        {
            return new TextInput(e);
        },
        table: function (e)
        {
            return new Table(e);
        },
        radioButton: function (e)
        {
            return new RadioButton(e);
        },
        tableHeader: function (e)
        {
            return new TableHeader(e);
        }
    };

    var elements = {
        input: {
            search: element.bind(null, by.id('search'))
        },
        radio: {
            limitToOne: element.bind(null, by.id('one')),
            limitToTeen: element.bind(null, by.id('two')),
            limitToFifteen: element.bind(null, by.id('three'))
        },
        table: element.bind(null, by.id('users')),
        thead: {
            id: element.bind(null, by.css('#users th:nth-of-type(1) a')),
            username: element.bind(null, by.css('#users th:nth-of-type(2) a')),
            fullName: element.bind(null, by.css('#users th:nth-of-type(3) a')),
            gender: element.bind(null, by.css('#users th:nth-of-type(4) a'))
        }
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.clearSearchInput = function ()
    {
        helper.input(elements.input.search()).clearValue();
    };

// table
    PageFragment.prototype.getTableContent = function ()
    {
        return helper.table(elements.table()).getContent('tbody tr', 'td', ['id', 'username', 'fullName', 'gender']);
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

// set radio button
    PageFragment.prototype.setRowsLimitToOne = function ()
    {
        return helper.radioButton(elements.radio.limitToOne()).setValue();
    };

    PageFragment.prototype.setRowsLimitToTeen = function ()
    {
        return helper.radioButton(elements.radio.limitToTeen()).setValue();
    };

    PageFragment.prototype.setRowsLimitToFifteen = function ()
    {
        return helper.radioButton(elements.radio.limitToFifteen()).setValue();
    };

// sort by table header
    PageFragment.prototype.sortById = function ()
    {
        return helper.tableHeader(elements.thead.id()).revert();
    };
    PageFragment.prototype.sortByUsername = function ()
    {
        return helper.tableHeader(elements.thead.username()).revert();
    };
    PageFragment.prototype.sortByFullName = function ()
    {
        return helper.tableHeader(elements.thead.fullName()).revert();
    };
    PageFragment.prototype.sortByGender = function ()
    {
        return helper.tableHeader(elements.thead.gender()).revert();
    };

    module.exports = PageFragment;
})();
