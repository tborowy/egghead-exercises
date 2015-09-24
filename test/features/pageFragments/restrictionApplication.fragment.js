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

    TextField.prototype.getValue = function ()
    {
        return this.element.getText();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        }
    };

    var elements = {
        restrictE: element.bind(null, by.css('.row.alert-success.form-control restrict-e')),
        restrictA: element.bind(null, by.css('.row.alert-danger.form-control div[restrict-a]')),
        restrictC: element.bind(null, by.css('.row.alert-info.form-control div[class~="restrict-c"]'))
    };

    function PageFragment()
    {
    }


    PageFragment.prototype.confirmAlert = function ()
    {
        return browser.switchTo().alert().accept();
    };
    PageFragment.prototype.getAlertMessage = function ()
    {
        return browser.switchTo().alert().getText();
    };


    PageFragment.prototype.getRestrictEValue = function ()
    {
        return helper.text(elements.restrictE()).getValue();
    };

    PageFragment.prototype.getRestrictAValue = function ()
    {
        return helper.text(elements.restrictA()).getValue();
    };

    PageFragment.prototype.getRestrictCValue = function ()
    {
        return helper.text(elements.restrictC()).getValue();
    };

    module.exports = PageFragment;
})();
