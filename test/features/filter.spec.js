(function ()
{
    'use strict';

    var FilterApplication = require('./pageFragments/filterApplication.fragment.js');
    var filterApplication = new FilterApplication();

    describe('Filter application', function ()
    {
        var usersList = [{
            'id': '1',
            'gender': 'Male',
            'fullName': 'Adam Hart',
            'username': 'ahart0'
        }, {
            'id': '2',
            'gender': 'Male',
            'fullName': 'Antonio Turner',
            'username': 'aturner1'
        }, {
            'id': '3',
            'gender': 'Male',
            'fullName': 'Jimmy Duncan',
            'username': 'jduncan2'
        }, {
            'id': '4',
            'gender': 'Male',
            'fullName': 'Johnny Wright',
            'username': 'jwright3'
        }, {
            'id': '5',
            'gender': 'Female',
            'fullName': 'Shirley Watson',
            'username': 'swatson4'
        }, {
            'id': '6',
            'gender': 'Male',
            'fullName': 'Randy Harper',
            'username': 'rharper5'
        }, {
            'id': '7',
            'gender': 'Male',
            'fullName': 'Gregory Lawson',
            'username': 'glawson6'
        }, {
            'id': '8',
            'gender': 'Female',
            'fullName': 'Martha Banks',
            'username': 'mbanks7'
        }, {
            'id': '9',
            'gender': 'Male',
            'fullName': 'Eugene Reyes',
            'username': 'ereyes8'
        }, {
            'id': '10',
            'gender': 'Male',
            'fullName': 'Randy Stanley',
            'username': 'rstanley9'
        }, {
            'id': '11',
            'gender': 'Female',
            'fullName': 'Elizabeth Turner',
            'username': 'eturnera'
        }, {
            'id': '12',
            'gender': 'Male',
            'fullName': 'Christopher Ferguson',
            'username': 'cfergusonb'
        }, {
            'id': '13',
            'gender': 'Male',
            'fullName': 'Robert Mcdonald',
            'username': 'rmcdonaldc'
        }, {
            'id': '14',
            'gender': 'Female',
            'fullName': 'Angela Boyd',
            'username': 'aboydd'
        }, {
            'id': '15',
            'gender': 'Female',
            'fullName': 'Frances Armstrong',
            'username': 'farmstronge'
        }];

        describe('initialization', function ()
        {
            beforeEach(function ()
            {
                browser.get('/');
            });

            it('should display table of students', function ()
            {
                expect(filterApplication.getTableContent()).toEqual(usersList);
            });
            it('should display 10 rows', function ()
            {
                expect(filterApplication.getNumberOfRows()).toEqual(15);
            });
        });

        describe('search filter', function ()
        {
            beforeEach(function ()
            {
                browser.get('/');
            });

            afterEach(function ()
            {
                filterApplication.clearSearchInput();
            });

            it('should display table of users filter by "female"', function ()
            {
                filterApplication.setSearchInputValue('female');
                expect(filterApplication.getTableContent()).toEqual([usersList[4], usersList[7], usersList[10], usersList[13], usersList[14]]);
            });
            it('should display table of users filter by "mbanks"', function ()
            {
                filterApplication.setSearchInputValue('mbanks');
                expect(filterApplication.getTableContent()).toEqual([usersList[7]]);
            });
        });

        describe('rows limit', function ()
        {
            beforeEach(function ()
            {
                browser.get('/');
            });

            it('should display one row of the table', function ()
            {
                filterApplication.setRowsLimitToOne();
                expect(filterApplication.getTableContent()).toEqual([usersList[0]]);
            });
            it('should display teen rows of the table', function ()
            {
                filterApplication.setRowsLimitToTeen();
                expect(filterApplication.getTableContent()).toEqual([usersList[0],
                                                                     usersList[1],
                                                                     usersList[2],
                                                                     usersList[3],
                                                                     usersList[4],
                                                                     usersList[5],
                                                                     usersList[6],
                                                                     usersList[7],
                                                                     usersList[8],
                                                                     usersList[9]]);
            });
            it('should display fifteen rows of the table', function ()
            {
                filterApplication.setRowsLimitToFifteen();
                expect(filterApplication.getTableContent()).toEqual([usersList[0],
                                                                     usersList[1],
                                                                     usersList[2],
                                                                     usersList[3],
                                                                     usersList[4],
                                                                     usersList[5],
                                                                     usersList[6],
                                                                     usersList[7],
                                                                     usersList[8],
                                                                     usersList[9],
                                                                     usersList[10],
                                                                     usersList[11],
                                                                     usersList[12],
                                                                     usersList[13],
                                                                     usersList[14]
                ]);
            });
        });

        describe('sort data by table header', function ()
        {
            beforeEach(function ()
            {
                browser.get('/');
            });

            describe('id', function ()
            {
                beforeEach(function ()
                {
                    filterApplication.sortById();
                });
                it('should sort data ascending by id', function ()
                {
                    expect(filterApplication.getTableContent()).toEqual([usersList[14],
                                                                         usersList[13],
                                                                         usersList[12],
                                                                         usersList[11],
                                                                         usersList[10],
                                                                         usersList[9],
                                                                         usersList[8],
                                                                         usersList[7],
                                                                         usersList[6],
                                                                         usersList[5],
                                                                         usersList[4],
                                                                         usersList[3],
                                                                         usersList[2],
                                                                         usersList[1],
                                                                         usersList[0]]);
                });
                it('should sort data descending by id', function ()
                {
                    filterApplication.sortById();
                    expect(filterApplication.getTableContent()).toEqual(usersList);
                });
            });

            describe('username', function ()
            {
                beforeEach(function ()
                {
                    browser.get('/');
                    filterApplication.sortByUsername();
                });

                it('should sort data ascending by username', function ()
                {
                    expect(filterApplication.getTableContent()).toEqual([usersList[13],
                                                                         usersList[0],
                                                                         usersList[1],
                                                                         usersList[11],
                                                                         usersList[8],
                                                                         usersList[10],
                                                                         usersList[14],
                                                                         usersList[6],
                                                                         usersList[2],
                                                                         usersList[3],
                                                                         usersList[7],
                                                                         usersList[5],
                                                                         usersList[12],
                                                                         usersList[9],
                                                                         usersList[4]
                    ]);
                });
                it('should sort data descending by username', function ()
                {
                    filterApplication.sortByUsername();
                    expect(filterApplication.getTableContent()).toEqual([usersList[4],
                                                                         usersList[9],
                                                                         usersList[12],
                                                                         usersList[5],
                                                                         usersList[7],
                                                                         usersList[3],
                                                                         usersList[2],
                                                                         usersList[6],
                                                                         usersList[14],
                                                                         usersList[10],
                                                                         usersList[8],
                                                                         usersList[11],
                                                                         usersList[1],
                                                                         usersList[0],
                                                                         usersList[13]
                    ]);
                });
            });

            describe('fullName', function ()
            {
                beforeEach(function ()
                {
                    browser.get('/');
                    filterApplication.sortByFullName();
                });

                it('should sort data ascending by fullName', function ()
                {
                    expect(filterApplication.getTableContent()).toEqual([usersList[0],
                                                                         usersList[13],
                                                                         usersList[1],
                                                                         usersList[11],
                                                                         usersList[10],
                                                                         usersList[8],
                                                                         usersList[14],
                                                                         usersList[6],
                                                                         usersList[2],
                                                                         usersList[3],
                                                                         usersList[7],
                                                                         usersList[5],
                                                                         usersList[9],
                                                                         usersList[12],
                                                                         usersList[4]]);
                });

                it('should sort data descending by fullName', function ()
                {
                    filterApplication.sortByFullName();
                    expect(filterApplication.getTableContent()).toEqual([usersList[4],
                                                                         usersList[12],
                                                                         usersList[9],
                                                                         usersList[5],
                                                                         usersList[7],
                                                                         usersList[3],
                                                                         usersList[2],
                                                                         usersList[6],
                                                                         usersList[14],
                                                                         usersList[8],
                                                                         usersList[10],
                                                                         usersList[11],
                                                                         usersList[1],
                                                                         usersList[13],
                                                                         usersList[0]]);
                });
            });

            describe('gender', function ()
            {
                beforeEach(function ()
                {
                    browser.get('/');
                    filterApplication.sortByGender();
                });

                it('should sort data ascending by gender', function ()
                {
                    expect(filterApplication.getTableContent()).toEqual([usersList[7],
                                                                         usersList[14],
                                                                         usersList[13],
                                                                         usersList[10],
                                                                         usersList[4],
                                                                         usersList[5],
                                                                         usersList[6],
                                                                         usersList[1],
                                                                         usersList[8],
                                                                         usersList[9],
                                                                         usersList[3],
                                                                         usersList[11],
                                                                         usersList[12],
                                                                         usersList[2],
                                                                         usersList[0]]);
                });

                it('should sort data descending by gender', function ()
                {
                    filterApplication.sortByGender();
                    expect(filterApplication.getTableContent()).toEqual([usersList[0],
                                                                         usersList[2],
                                                                         usersList[3],
                                                                         usersList[5],
                                                                         usersList[6],
                                                                         usersList[1],
                                                                         usersList[8],
                                                                         usersList[9],
                                                                         usersList[11],
                                                                         usersList[12],
                                                                         usersList[10],
                                                                         usersList[4],
                                                                         usersList[14],
                                                                         usersList[13],
                                                                         usersList[7]]);
                });
            });
        });

        describe('filter, sort and limit', function ()
        {
            beforeEach(function ()
            {
                browser.get('/');
            });

            it('should filter data with "w", limit rows to one and sort data by username', function ()
            {
                filterApplication.setSearchInputValue('w');
                filterApplication.setRowsLimitToOne();
                filterApplication.sortByUsername();
                expect(filterApplication.getTableContent()).toEqual([usersList[6]]);

            });
            it('should filter data with "er" and sort data descending by id', function ()
            {
                filterApplication.setSearchInputValue('er');
                filterApplication.sortById();
                filterApplication.sortById();
                expect(filterApplication.getTableContent()).toEqual([usersList[12], usersList[11], usersList[10], usersList[8], usersList[5], usersList[1]]);
            });
        });
    });
})();
