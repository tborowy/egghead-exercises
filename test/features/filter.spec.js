var FilterApplication = require('./pageFragments/filterApplication.fragment.js');
var filterApplication = new FilterApplication();

describe('Filter application', function ()
{
    'use strict';
    var studentsList = [{
        firstName: 'Warner',
        lastName: 'Bridges',
        age: '18',
        email: 'warner.bridges@undefined.biz',
        phone: '+1 (914) 451-3055'
    }, {
        firstName: 'Bauer',
        lastName: 'Spencer',
        age: '24',
        email: 'bauer.spencer@undefined.us',
        phone: '+1 (942) 551-2179'
    }, {
        firstName: 'Good',
        lastName: 'Burnett',
        age: '27',
        email: 'good.burnett@undefined.tv',
        phone: '+1 (820) 450-3124'
    }, {
        firstName: 'Austin',
        lastName: 'Harvey',
        age: '35',
        email: 'austin.harvey@undefined.org',
        phone: '+1 (957) 597-2822'
    }, {
        firstName: 'Candace',
        lastName: 'Gordon',
        age: '33',
        email: 'candace.gordon@undefined.name',
        phone: '+1 (932) 408-2012'
    }, {
        firstName: 'Chang',
        lastName: 'Ryan',
        age: '32',
        email: 'chang.ryan@undefined.ca',
        phone: '+1 (994) 534-3669'
    }, {
        firstName: 'Gutierrez',
        lastName: 'Freeman',
        age: '22',
        email: 'gutierrez.freeman@undefined.info',
        phone: '+1 (944) 430-2322'
    }, {
        firstName: 'Knapp',
        lastName: 'Hardy',
        age: '30',
        email: 'knapp.hardy@undefined.biz',
        phone: '+1 (978) 554-2635'
    }, {
        firstName: 'Maxine',
        lastName: 'Stevenson',
        age: '23',
        email: 'maxine.stevenson@undefined.co.uk',
        phone: '+1 (845) 419-2949'
    }, {
        firstName: 'Gray',
        lastName: 'Rose',
        age: '21',
        email: 'gray.rose@undefined.io',
        phone: '+1 (807) 582-3992'
    }];

    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should display table of students', function ()
        {
            expect(filterApplication.getTableContent()).toEqual(studentsList);
        });
        it('should display 10 rows', function ()
        {
            expect(filterApplication.getNumberOfRows()).toEqual(10);
        });
    });

    describe('search filter', function ()
    {
        afterEach(function ()
        {
            filterApplication.clearSearchInput();
        });

        it('should display table of students filter by "rose"', function ()
        {
            filterApplication.setSearchInputValue('rose');
            expect(filterApplication.getTableContent()).toEqual([studentsList[9]]);
        });
        it('should display table of students filter by "21"', function ()
        {
            filterApplication.setSearchInputValue('21');
            expect(filterApplication.getTableContent()).toEqual([studentsList[1], studentsList[9]]);
        });
    });

    describe('firstName filter', function ()
    {
        afterEach(function ()
        {
            filterApplication.clearFirstNameInput();
        });

        it('should display table of students filter by "c"', function ()
        {
            filterApplication.setFirstNameInputValue('c');
            expect(filterApplication.getTableContent()).toEqual([studentsList[4], studentsList[5]]);
        });
        it('should display table of students filter by "go"', function ()
        {
            filterApplication.setFirstNameInputValue('go');
            expect(filterApplication.getTableContent()).toEqual([studentsList[2]]);
        });
    });

    describe('lastName filter', function ()
    {
        afterEach(function ()
        {
            filterApplication.clearLastNameInput();
        });

        it('should display table of students filter by "sp"', function ()
        {
            filterApplication.setLastNameInputValue('sp');
            expect(filterApplication.getTableContent()).toEqual([studentsList[1]]);
        });
        it('should display table of students filter by "h"', function ()
        {
            filterApplication.setLastNameInputValue('h');
            expect(filterApplication.getTableContent()).toEqual([studentsList[3], studentsList[7]]);
        });
    });

    describe('age filter', function ()
    {
        afterEach(function ()
        {
            filterApplication.clearAgeInput();
        });

        it('should display table of students filter by "2"', function ()
        {
            filterApplication.setAgeInputValue('2');
            expect(filterApplication.getTableContent()).toEqual([studentsList[1],
                                                                 studentsList[2],
                                                                 studentsList[5],
                                                                 studentsList[6],
                                                                 studentsList[8],
                                                                 studentsList[9]]);
        });
        it('should display table of students filter by "1"', function ()
        {
            filterApplication.setAgeInputValue('1');
            expect(filterApplication.getTableContent()).toEqual([studentsList[0], studentsList[9]]);
        });
    });

    describe('email filter', function ()
    {
        afterEach(function ()
        {
            filterApplication.clearEmailInput();
        });

        it('should display table of students filter by "good"', function ()
        {
            filterApplication.setEmailInputValue('good');
            expect(filterApplication.getTableContent()).toEqual([studentsList[2]]);
        });
        it('should display table of students filter by "ba"', function ()
        {
            filterApplication.setEmailInputValue('ba');
            expect(filterApplication.getTableContent()).toEqual([studentsList[1]]);
        });
    });

    describe('phone filter', function ()
    {
        afterEach(function ()
        {
            filterApplication.clearPhoneInput();
        });

        it('should display table of students filter by "994"', function ()
        {
            filterApplication.setPhoneInputValue('994');
            expect(filterApplication.getTableContent()).toEqual([studentsList[5]]);
        });
        it('should display table of students filter by "807"', function ()
        {
            filterApplication.setPhoneInputValue('807');
            expect(filterApplication.getTableContent()).toEqual([studentsList[9]]);
        });
    });

    describe('when search, lastName and age filters are used', function ()
    {
        beforeAll(function ()
        {
            filterApplication.clearAllInputs();
            filterApplication.setSearchInputValue('b');
            filterApplication.setLastNameInputValue('b');
            filterApplication.setAgeInputValue('2');

        });

        it('should display table of students filter by "b" in search, "b" in lastName and "2" in age', function ()
        {
            expect(filterApplication.getTableContent()).toEqual([studentsList[2]]);
        });
    });

    describe('when firstName and email filters are used', function ()
    {
        beforeAll(function ()
        {
            filterApplication.clearAllInputs();
            filterApplication.setSearchInputValue('a');
            filterApplication.setFirstNameInputValue('a');
            filterApplication.setEmailInputValue('ca');

        });

        it('should display table of students filter by "a" in search, "a" in firstName and "ca" in email', function ()
        {
            expect(filterApplication.getTableContent()).toEqual([studentsList[4], studentsList[5]]);
        });
    });
});
