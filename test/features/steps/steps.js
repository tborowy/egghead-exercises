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

    this.When(/^I enter "(.*)" into "(.*)" field$/, function (text, name, callback)
    {
        var webElement = fragments(name)();
        clearAndType(webElement, text).then(callback);
    });

    this.When(/^I click "([^"]*)"/, function (name, callback) {
        browser.actions().mouseMove(fragments(name)()).perform().then(function () {
            fragments(name)().click().then(function () {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.When(/^I click "(\d+)" image$/, function (number, callback) {
        number = parseInt(number, 10);
        browser.actions().mouseMove(fragments('images')().get(number)).perform().then(function () {
            fragments('images')().get(number).click().then(function () {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should see "([^"]*)" in "(\d+)" title$/, function (text, number, callback) {
        number = parseInt(number, 10);
        expect(fragments('titles')().get(number).getText()).to.eventually.equal(text).and.notify(callback);
    });

    this.Then(/^I should not see "([^"]*)"$/, function (element, callback) {
        expect(fragments(element)().isPresent()).to.become(false).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)"$/, function (element, callback)
    {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

};
