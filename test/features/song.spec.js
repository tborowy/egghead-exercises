'use strict';

var SongApplication = require('./pageFragments/songApplication.fragment.js');
var songApplication = new SongApplication();

describe('Song application', function ()
{
    beforeAll(function ()
    {
        browser.get('/');
    });
    describe('initialization', function ()
    {
        it('should set the "main text" input to "Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr..."', function ()
        {
            expect(songApplication.getMainTextInputValue()).toBe('Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr...');
        });
        it('should set the "word to replace" input to "purr"', function ()
        {
            expect(songApplication.getWordToReplaceInputValue()).toBe('purr');
        });
    });

    describe('when the new word to replace is entered', function ()
    {
        beforeAll(function ()
        {
            songApplication.clearWordToReplaceInputValue();
            songApplication.setWordToReplaceInputValue('aaa');
        });

        it('should not change the main text input value', function ()
        {
            expect(songApplication.getMainTextInputValue()).toBe('Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, purr, purr, purr...');
        });
        it('should replace the "purr" word with "aaa" in header', function ()
        {
            expect(songApplication.getHeaderTextField()).toBe('Soft Kitty, Warm Kitty, little ball of fur. Happy Kitty, Sleepy Kitty, aaa, aaa, aaa...');
        });
    });

    describe('when the new main text is entered', function ()
    {
        describe('word to replace is not in the main text ', function ()
        {
            beforeAll(function ()
            {
                songApplication.clearMainTextInputValue();
                songApplication.setMainTextInputValue('Lorem ipsum dolor sit amet...');
            });

            it('should set the header to main text', function ()
            {
                expect(songApplication.getHeaderTextField()).toBe('Lorem ipsum dolor sit amet...');
            });
        });

        describe('word to replace is in the main text ', function ()
        {
            beforeAll(function ()
            {
                songApplication.clearWordToReplaceInputValue();
                songApplication.clearMainTextInputValue();
                songApplication.setMainTextInputValue('I sing a song: purr, purr');
                songApplication.setWordToReplaceInputValue('tralala');
            });

            it('should replace the "purr" word with "tralala" in header', function ()
            {
                expect(songApplication.getHeaderTextField()).toBe('I sing a song: tralala, tralala');
            });
        });
    });

});
