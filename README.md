#Exercise 18: Thinking differently about organization.

##Summary
You are provided with an application that has many controllers, directives and filters. Reorder and group the entries to make them easier to read.

##Goals
* move all the controllers to the object `calcAppElements.controllers`
* move all the directives to the object `calcAppElements.directives`

##Before you start, please refer to:
 * [angularjs-thinking-differently-about-organization](https://egghead.io/lessons/angularjs-thinking-differently-about-organization)

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

To unit tests in development mode:
    
    grunt test:dev
    
To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    yarn test

Good luck!
