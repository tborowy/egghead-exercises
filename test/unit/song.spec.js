describe('song', function ()
{
    'use strict';

    var scope;
    var song;
    var oldWord;
    var newWord;
    var songTextMock = {song: 'Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr...', newWord: 'purr'};

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();
        song = songTextMock.song;
        newWord = songTextMock.newWord;

        $controller('NewWordCtrl', {$scope: scope, SongText: songTextMock});
    }));

    describe('replaceWord function', function ()
    {
        it('should call replaceWord function and change oldWord "purr" to newWord "o"', function ()
        {
            newWord = 'o';
            oldWord = 'purr';

            expect(scope.replaceWord(song, oldWord, newWord)).toEqual('Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, o, o, o...');
        });

        it('should call replaceWord function and change oldWord "purr" to newWord "aaa', function ()
        {
            newWord = 'aaa';
            oldWord = 'purr';

            expect(scope.replaceWord(song, oldWord, newWord)).toEqual('Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, aaa, aaa,' +
                    ' aaa...');
        });

        it('should call replaceWord function and replace the oldWord (with default "purr" word) in new text song', function ()
        {
            song = 'I sing a song: oo, oo';
            oldWord = 'oo';

            expect(scope.replaceWord(song, oldWord, newWord)).toEqual('I sing a song: purr, purr');
        });

        it('should call replaceWord function and replace the oldWord (with "trlalala" word) in new text song', function ()
        {
            song = 'I sing some song: la, la';
            oldWord = 'la';
            newWord = 'trlalala';

            expect(scope.replaceWord(song, oldWord, newWord)).toEqual('I sing some song: trlalala, trlalala');
        });
    });
});
