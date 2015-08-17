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

    this.When(/^I select option "([^"]*)" in "([^"]*)"$/, function (item, select, callback)
    {
        selectOption(item, fragments(select)()).then(callback);

    });

    this.When(/^I enter "(.*)" into "(.*)" field$/, function (text, name, callback)
    {
        var webElement = fragments(name)();
        clearAndType(webElement, text).then(callback);
    });


    this.When(/^I click "([^"]*)"/, function (name, callback)
    {
        browser.actions().mouseMove(fragments(name)()).perform().then(function ()
        {
            fragments(name)().click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)"$/, function (text, result, callback)
    {
        expect(fragments(result)().getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I should not see message in "([^"]*)"$/, function (message, callback) {
        expect(fragments(message)().isPresent()).to.become(false).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

    this.Then(/^pause$/, function (callback)
    {
        browser.pause();
        callback();
    });


};
