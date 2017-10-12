#Exercise 21 : scope vs $scope

##Summary
In this application there are two directives working on the same scope. The final working application should display two inputs with different values. You can achieve this by editing `scope.js`.

##Goals
 * don't make any change in the **templates** of directives and  **index.html** view.
 * you should be able to insert two different values for the inputs and display it by clicking the corresponding button.

###Before you start, please refer to:
* [angularjs-scope-vs-scope](https://egghead.io/lessons/angularjs-scope-vs-scope)

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
