describe('$http', function ()
{
    'use strict';
    var AppCtrlMock;
    var http;
    var httpBackend;
    var controller;
    var createController;

    var songsList = [{
        artist: 'John Lennon', title: 'Imagine', year: 1971
    }, {
        artist: 'Bob Dylan', title: 'Like a Rolling Stone', year: 1965
    }, {
        artist: 'Aretha Franklin', title: 'Respect', year: 1965
    }, {
        artist: 'The Beatles', title: 'Hey Jude', year: 1968
    }];

    var songs = [{artist: 'Ed Sheeran', title: 'Thinking Out Loud'}, {artist: 'Maroon 5', title: 'Sugar'}];

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $httpBackend, $http)
    {
        http = $http;
        httpBackend = $httpBackend;
        controller = $controller;

        createController = function ()
        {
            return $controller('AppCtrl', {'$http': http});
        };
    }));

    beforeEach(function ()
    {
        httpBackend.when('GET', 'http://localhost:3000/songs').respond(songsList);
    });

    describe('GET /songs', function ()
    {
        beforeEach(function ()
        {
            httpBackend.expectGET('http://localhost:3000/songs');
            AppCtrlMock = createController();
            httpBackend.flush();
        });
        it('should respond with all songs', function ()
        {
            expect(AppCtrlMock.songs).toEqual(songsList);
        });
        it('should set information message', function ()
        {
            expect(AppCtrlMock.message).toEqual('Songs were uploaded');
        });
    });

    describe('POST /favourites', function ()
    {
        beforeEach(function ()
        {
            AppCtrlMock = createController();
            AppCtrlMock.addFavouriteSong(songs[0]);
            httpBackend.when('POST', 'http://localhost:3000/favourites').respond(songs[0]);
            httpBackend.expectPOST('http://localhost:3000/favourites');
            httpBackend.flush();
        });
        describe('when new song was added', function ()
        {
            it('should save favourite song and respond message', function ()
            {
                expect(AppCtrlMock.message).toEqual('I just add "Thinking Out Loud" to your favourite songs list!');
            });
            it('should clear input fields ', function ()
            {
                expect(AppCtrlMock.favouriteSong).toEqual({});
            });
            it('should update favouriteSongsList', function ()
            {
                expect(AppCtrlMock.favouriteSongsList).toEqual([{artist: 'Ed Sheeran', title: 'Thinking Out Loud'}]);
            });

        });
    });
    describe('POST /favourites', function ()
    {
        describe('when new songs were added', function ()
        {
            beforeEach(function ()
            {
                AppCtrlMock = createController();

            });

            describe('songs with title: "Thinking Out Loud"', function ()
            {
                beforeEach(function ()
                {
                    AppCtrlMock.addFavouriteSong(songs[0]);
                    httpBackend.when('POST', 'http://localhost:3000/favourites').respond(songs[0]);
                    httpBackend.expectPOST('http://localhost:3000/favourites');
                    httpBackend.flush();
                });
                it('should save "Thinking Out Loud" song and respond message', function ()
                {
                    expect(AppCtrlMock.message).toEqual('I just add "Thinking Out Loud" to your favourite songs list!');
                });
                it('should update favourite songs list', function ()
                {
                    expect(AppCtrlMock.favouriteSongsList).toEqual([{artist: 'Ed Sheeran', title: 'Thinking Out Loud'}]);
                });

            });
            describe('songs with title: "Sugar"', function ()
            {
                beforeEach(function ()
                {
                    AppCtrlMock.addFavouriteSong(songs[1]);
                    httpBackend.when('POST', 'http://localhost:3000/favourites').respond(songs[1]);
                    httpBackend.expectPOST('http://localhost:3000/favourites');
                    httpBackend.flush();
                });
                it('should save "Sugar" song and respond message', function ()
                {
                    expect(AppCtrlMock.message).toEqual('I just add "Sugar" to your favourite songs list!');
                });
                it('should update favourite songs list', function ()
                {
                    expect(AppCtrlMock.favouriteSongsList).toEqual([{artist: 'Maroon 5', title: 'Sugar'}]);
                });

            });

        });
    });

    describe('DELETE favourites', function ()
    {
        beforeEach(function ()
        {
            AppCtrlMock = createController();
            AppCtrlMock.addFavouriteSong(songs[1]);
            httpBackend.when('POST', 'http://localhost:3000/favourites').respond(songs[1]);
            httpBackend.expectPOST('http://localhost:3000/favourites');
            httpBackend.flush();
            AppCtrlMock.removeFavouriteSongs();
            httpBackend.when('DELETE', 'http://localhost:3000/favourites').respond('The list was cleared.');
        });

        describe('when the clear button was clicked', function ()
        {
            it('should respond with "The list was cleared" message', function ()
            {
                httpBackend.expectDELETE('http://localhost:3000/favourites');
                httpBackend.flush();
                expect(AppCtrlMock.message).toEqual('The list was cleared.');
            });
            it('should respond with "The list is cleared" message', function ()
            {
                httpBackend.expectDELETE('http://localhost:3000/favourites');
                httpBackend.flush();
                expect(AppCtrlMock.favouriteSongsList).toEqual([]);
            });
        });
    });


});

