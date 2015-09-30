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

    function Circle(e)
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

    Circle.prototype.clickOn = function ()
    {
        return this.element.click();
    };

    Circle.prototype.dbClickOn = function ()
    {
        return browser.actions().doubleClick(this.element).perform();
    };

    Circle.prototype.moveMouse = function ()
    {
        return browser.actions().mouseMove(this.element).perform();
    };

    var helper = {
        text: function (e)
        {
            return new TextField(e);
        },
        circle: function (e)
        {
            return new Circle(e);
        }
    };

    var elements = {
        circle: {
            red: element.bind(null, by.css('div[alarm][red][class~="circle"]')),
            yellow: element.bind(null, by.css('div[alarm][yellow][class~="circle"]')),
            green: element.bind(null, by.css('div[alarm][green][class~="circle"]'))
        }
    };

    function PageFragment()
    {
    }


    PageFragment.prototype.getHeaderValue = function ()
    {
        return helper.text(elements.header()).getValue();
    };

    PageFragment.prototype.confirmAlert = function ()
    {
        return browser.switchTo().alert().accept();
    };
    PageFragment.prototype.getAlertMessage = function ()
    {
        return browser.switchTo().alert().getText();
    };

    PageFragment.prototype.clickRedCircle = function ()
    {
        return helper.circle(elements.circle.red()).clickOn();
    };

    PageFragment.prototype.dbClickYellowCircle = function ()
    {
        return helper.circle(elements.circle.yellow()).dbClickOn();
    };

    PageFragment.prototype.moveOnGreenCircle = function ()
    {
        return helper.circle(elements.circle.green()).moveMouse();
    };

    module.exports = PageFragment;
})();
