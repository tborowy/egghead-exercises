/*jshint -W079 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();

var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function () {
    'use strict';

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback) {
        browser.get('/#' + url).then(callback);
    });

    this.When(/^I move mouse on "([^"]*)" element$/, function (name, callback) {
        browser.actions().mouseMove(fragments(name)()).perform().then(callback);
    });

    this.Then(/^I should see "(\d+)" stars$/, function (number, callback) {
        number = parseInt(number, 10);
        expect(fragments('petals')().count()).to.eventually.equal(number).and.notify(callback);
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)" list$/, function (array, list, callback) {
        array = array.split(',');
        expect(fragments(list)().getText()).to.eventually.eql(array).and.notify(callback);
    });

    this.Then(/^pause$/, function (callback) {
        browser.pause();
        callback();
    });
};
