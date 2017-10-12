#Exercise 1 : Binding

##Summary
Application displays three inputs and an artists table. Each class attribute of the row which is binded to one of the input values by order. By inputting a text will result in a color change of the table row.

##Goals
You are required to implement a solution that will result in such behavior:
an value input should be taken as table row class attribute, so after typing 'warning' in the first input then the first table row should be displayed with a
 class warning. This implies for the other input and rows as well.

###Before you start, please refer to:
* [angularjs-binding](https://egghead.io/lessons/angularjs-binding)
* **bootstrap classes** are used for coloring table rows [contextual classes](http://getbootstrap.com/css/#tables)

### + Bonus task
Try to connect input fields with columns of the table.

##Setup
 
###To install dependencies

```
yarn install
```

```
bower install
```


###To start application in live reload mode

    grunt serve
    
###Jshint
To run verify jshint:
    
    grunt jshint:default

###Run tests

To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test

Good luck!
