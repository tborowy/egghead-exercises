var AlarmApplication = require('./pageFragments/alarmApplication.fragment.js');
var alarmApplication = new AlarmApplication();

describe('Alarm application', function ()
{
    'use strict';

    beforeAll(function ()
    {
        browser.get('/');
    });

    describe('red directive', function ()
    {
        beforeAll(function ()
        {
            alarmApplication.clickRedCircle();
        });
        afterEach(function ()
        {
            alarmApplication.confirmAlert();
        });
        it('should display "Red alarm!" alert', function ()
        {
            expect(alarmApplication.getAlertMessage()).toEqual('Red alarm!');
        });
    });

    describe('yellow directive', function ()
    {
        beforeAll(function ()
        {
            alarmApplication.dbClickYellowCircle();
        });

        afterEach(function ()
        {
            alarmApplication.confirmAlert();
        });

        it('should display "Yellow alarm!" alert', function ()
        {
            expect(alarmApplication.getAlertMessage()).toEqual('Yellow alarm!');
        });
    });

    describe('green directive', function ()
    {
        beforeAll(function ()
        {
            alarmApplication.moveOnGreenCircle();
        });

        afterEach(function ()
        {
            alarmApplication.confirmAlert();
        });

        it('should display "Green alarm!" alert', function ()
        {
            expect(alarmApplication.getAlertMessage()).toEqual('Green alarm!');
        });
    });
});
