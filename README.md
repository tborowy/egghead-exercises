#Exercise 14 : Directive to Directive Communication

## Summary
In this exercise, your challenge is to share information between directives. 

You are supposed to create four directives:
`alarm` (main directive with controller), `red`, `yellow` and `green`.

Implement a functionality that will allow you to call alerts. When you click on red circle, double click on yellow circle and when the mouse hovers over the 
green circle. 

##Goals
* main directive should have a controller with three function (with names like pattern **addColorName**)
* the content of the alarms is a simple message ***"ColorName alarm!"***
* use directive in prepared div elements (check comment)
 
##Before you start, please refer to:
 * [angularjs-directive-to-directive-communication](https://egghead.io/lessons/angularjs-directive-to-directive-communication)

##Setup
 You should have `npm`, `bower`, `grunt-cli`  packages installed to run this example.
 
###To install dependencies 

    npm install && bower install


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
