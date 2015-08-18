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

    this.Then(/^I should see "([^"]*)"$/, function (element, callback) {
        expect(fragments(element)().isPresent()).to.become(true).and.notify(callback);
    });

    this.When(/^I click "([^"]*)"/, function (name, callback) {
        browser.actions().mouseMove(fragments(name)()).perform().then(function () {
            fragments(name)().click().then(function () {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)"$/, function (text, result, callback) {
        expect(fragments(result)().getText()).to.eventually.equal(text).and.notify(callback);
    });


};
