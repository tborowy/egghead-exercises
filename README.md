##Exercise 48: Testing a Service

## Summary

You are provided with the `User` service uses five functions `save`,`get`,`remove`, `getAll` and `count`. Test this service as best you can.

## Goals

Your task is to write unit tests to `User` service. It is composed of five functions:

 * `save(user)` - add new user to `users` object or edit existing user  
 * `get(id)` - return specified user
 * `remove(id)` - delete specific user
 * `getAll()`- return users list
 * `count()` - return the number of users 

To tests your unit tests use `grunt mutationTest`

## Before you start, please refer to:
* [angularjs-testing-a-service](https://egghead.io/lessons/angularjs-testing-a-service)

## Setup

### To install dependencies 

```
npm install
```

```
bower install
```

### To start application in live reload mode

    grunt serve
    
### Jshint
To run verify jshint:
    
    grunt jshint:default

### Run tests

To unit tests in development mode:
    
    grunt test:dev

To run verify jshint, tests and coverage:

    npm test

To run mutation tests:
    
    grunt mutationTest

Good luck!
