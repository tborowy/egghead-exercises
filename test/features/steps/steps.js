var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
/*jshint -W079 */
var expect = chai.expect;
var fragments = require('../fragments/fragments.js');

module.exports = function ()
{
    'use strict';


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

    this.When(/^I browse to the "([^"]*)"$/, function (url, callback)
    {
        browser.get('/#' + url).then(callback);
    });

    this.When(/^I select option "([^"]*)" in "([^"]*)"$/, function (item, select, callback)
    {
        selectOption(item, fragments(select)()).then(callback);

    });

    this.When(/^I click "([^"]*)"$/, function (element, callback)
    {
        browser.actions().mouseMove((fragments(element)())).perform().then(function ()
        {
            (fragments(element)()).click().then(function ()
            {
                return browser.waitForAngular();
            }).then(callback);
        });
    });

    this.Then(/^I should see "([^"]*)" in "([^"]*)"$/, function (text, result, callback)
    {
        expect(fragments(result)().getText()).to.eventually.equal(text).and.notify(callback);
    });


    this.Then(/^I should not see "([^"]*)"$/, function (element, callback)
    {
        expect((fragments(element)()).isPresent()).to.eventually.be.false.and.notify(callback);
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
