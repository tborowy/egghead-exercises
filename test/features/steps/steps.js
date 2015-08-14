var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    function clearAndType(webElement, text)
    {
        text = text.replace(/\\n/g, protractor.Key.ENTER);
        return webElement.getAttribute('type').then(function (type)
        {
            if ('date' !== type) {
                return webElement.clear().then(function ()
                {
                    return webElement.sendKeys(text);
                });
            } else {
                return webElement.sendKeys(text);
            }
        });
    }

    function selectOption(item, input)
    {
        var desiredOption = null;
        return input.all(protractor.By.tagName('option')).getWebElements().then(function (options)
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
    }

    function selectElement(element)
    {
        return (element.toLowerCase()) === 'first' ? 0 : element = element === 'second' ? 1 : 2;

    }

    this.When(/^I enter "(.*)" into "(.*)" box in "(.*)" field$/, function (text, box, field, callback)
    {
        var webElement = fragments(field)().get(selectElement(box));
        clearAndType(webElement, text).then(callback);

    });

    this.When(/^I select option "([^"]*)" in "([^"]*)" into "([^"]*)" box$/, function (item, input, box, callback)
    {
        selectOption(item, fragments(input)().get(selectElement(box))).then(callback);
    });

    this.When(/^I click "([^"]*)" in "([^"]*)" box$/, function (name, box, callback)
    {
        browser.actions().mouseMove(fragments(name)().get(selectElement(box))).perform().then(function ()
        {
            fragments(name)().get(selectElement(box)).click().then(function ()
            {
                browser.switchTo().alert().then(function (alert)
                {
                    expect(alert.getText()).to.eventually.equal('Blah').and.notify(callback);

                    return alert.dismiss();

                });

            });
        });
    });

    this.Then(/^I should see "([^"]*)"$/, function (element, callback) {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

    this.Then(/^I should see "(.*)" into "(.*)" box in "(.*)" field$/, function (text, box, field, callback)
    {
        expect(fragments(field)().get(selectElement(box)).getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^"(.*)" "(.*)" should change color to "(.*)"$/, function (box, square, color, callback)
    {
        if (color === 'blue') {
            color = 'rgba(0, 0, 255, 1)';
        } else if (color === 'red') {
            color = 'rgba(255, 0, 0, 1)';
        } else if (color === 'green') {
            color = 'rgba(0, 0, 255, 1)';
        }
        expect((fragments(square)().get(selectElement(box))).getCssValue('backgroundColor')).to.eventually.equal(color).and.notify(callback);
    });
};
