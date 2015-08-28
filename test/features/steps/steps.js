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

    this.Then(/^I should see "([^"]*)" in "([^"]*)" column in row "(\d+)" of "([^"]*)"$/, function (expectedText, columnName, row, table, callback)
    {
        row = parseInt(row, 10);
        var rowElement = fragments(table)().element(by.css('tbody tr:nth-of-type(' + row + ')'));
        table = table.split('.');
        table.pop();
        table.push(columnName);
        var columnElement = fragments(table.join('.'))();
        expect(rowElement.element(columnElement.locator()).getText()).to.eventually.equal(expectedText).and.notify(callback);
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
    this.Then(/^the "([^"]*)" table should have "(\d+)" rows$/, function (name, rowCount, callback) {
        rowCount = parseInt(rowCount, 10);
        expect(fragments(name)().all(by.css('tbody tr')).count()).to.eventually.equal(rowCount).and.notify(callback);
    });

    this.Then(/^I should see "(.*)" text in "([^"]*)"$/, function (text, element, callback)
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
