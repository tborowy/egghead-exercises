var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';

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

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    this.When(/^I enter "(.*)" into "(.*)" field$/, function (text, name, callback)
    {
        var webElement = fragments(name)();
        clearAndType(webElement, text).then(callback);
    });

    this.When(/^I click "([^"]*)"$/, function (name, callback)
    {
        browser.actions().mouseMove(fragments(name)()).perform().then(function ()
        {
            fragments(name)().click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });
    this.When(/^I click "(\d+)" on the "([^"]*)"$/, function (number, images, callback)
    {
        number = (parseInt(number, 10)) - 1;
        browser.actions().mouseMove(fragments(images)().get(number)).perform().then(function ()
        {
            fragments(images)().get(number).click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should be directed to "([^"]*)"$/, function (url, callback)
    {
        expect(browser.getCurrentUrl()).to.eventually.match(new RegExp(url.replace('/', '\/').replace('?', '\\?') + '$')).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" text in "([^"]*)"$/, function (text, element, callback)
    {
        expect(fragments(element)().getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I should not see "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isPresent()).to.become(false).and.notify(callback);
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
