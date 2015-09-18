#Exercise 4 : Defining a method on the scope

##Summary
You are provided with a simple application with two input fields that are not bound. You are supposed to replace **purr** 
in the textarea, with a word specified in the text input below and display the resulting text inside h3 element(`display board`).

##Goals

* create `replaceWord()` function inside `NewWordCtrl` 
* `replaceWord()` should :
    * accept three arguments: ***text, word, newWord*** 
    * replace `word` with a `newWord` in specified `text` (you can use `split()` and `join()` functions)
* textarea model should default to lyrics from `SongText` factory
* input for newWord should default to `newWord` from `SongText` factory 
* the upper `display board` text value should be taken from the textarea below, refactored by a function `replaceWord()` 
* set `word` argument to *"purr"*
* `display board` should be updated as values in textarea or input change

##Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)

##Setup
 You should have `npm`, `bower`, `grunt-cli`  packages installed to run this example.
 
###To resolve dependencies run:

```
npm install
```

```
bower install
```

###To run the application:

```
grunt serve
```

###To detect errors and potential problems in your code:

```
grunt jshint
```

###To test the application:

To run all the tests:

```
npm test
```

To run only karma unit tests:

```
npm run karma
```
To run only protractor tests:

```
npm run protractor
```

Good luck!
