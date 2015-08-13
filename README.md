#Exercise 4 : Defining a method on the scope

##Summary
In this application, you are supposed to replace **purr** text fragment in the textarea, with a word specified in text input below and display refactored 
text inside h3 element(`display board`).

##Goals

* create `replaceWord()` function inside `NewWordCtrl` - it should take three parameters: ***text, word, newWord*** 
* `replaceWord()` should replace `word` with a `newWord` in specified `text` (you can use `split()` and `join()` functions)
* textarea model should be set default to lyrics from `SongText` factory
* input for newWord should be set default to `newWord` from `SongText` factory 
* the upper `display board` text value should be taken from the textarea below, refactored by a function `replaceWord()` (with a `newWord` 
parameter set to the value from *word input* and word set as *"purr"*)
* `display board` should be updated as values in textarea or input change

##Before you start, please refer to:
* [angularjs-defining-a-method-on-the-scope](https://egghead.io/lessons/angularjs-defining-a-method-on-the-scope)

##Setup
 You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. To resolve dependencies run:

```
npm install
```

```
bower install
```

To run the application:

```
grunt serve
```

To run cucumber tests:

```
grunt test
```

To run unit tests:

```
grunt karma
```

Good luck!
