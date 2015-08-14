/*jshint -W079 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    this.When(/^I should see "([^"]*)" alert$/, function (expectedText, callback)
    {
        expect(browser.switchTo().alert().getText()).to.eventually.equal(expectedText).and.notify(callback);
    });

    this.When(/^I confirm alert$/, function (callback)
    {
        browser.switchTo().alert().accept();
        callback();
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
