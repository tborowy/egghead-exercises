#Exercise 4 : Defining a method on the scope

##Summary
You are provided with a simple application with two input fields that are not bound. You are supposed to replace **purr** 
in the textarea, with a word specified in the text input below and display the resulting text inside h3 element(`display board`).

##Goals

* create `replaceWord()` function inside `NewWordCtrl` 
* `replaceWord()` should :
    * accept three arguments: ***text, word, newWord*** 
    * replace `word` with a `newWord` in specified `text` (you can use `split()` and `join()` functions)
* textarea model should be set default to lyrics from `SongText` factory
* input for newWord should be set default to `newWord` from `SongText` factory 
* the upper `display board` text value should be taken from the textarea below, refactored by a function `replaceWord()` 
* set `word` argument to *"purr"*
* `display board` should be updated as values in textarea or input change

##Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)

##Setup
 
###To install dependencies 

```
npm install
```

```
bower install
```

###To start application in live reload mode:

    grunt serve
    
###Jshint
To run verify jshint:
    
    grunt jshint:default

###Run tests

To unit tests in development mode:
    
    grunt test:dev
    
To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    npm test


Good luck!
