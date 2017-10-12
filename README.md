#Exercise 24 : ng-view

##Summary
AngularJS's ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (typically the index.html) file. The application is already setup but ngView is not utilised.

##Goals
Your task is to set up routing in this simple application. 

* configure the routing to display home.html page at `/` path'
* display message from controller at `home.html`
* **don't** change `home.html` file and `RouteCtrl`

##Before you start, please refer to:
* [angularjs-ng-view](https://egghead.io/lessons/angularjs-ng-view)

##Setup
 
###ngRoute

 * pay attention on **AngularJS 1.2.x Routing Changes: ngRoute** below the movie
 * add `angular-route.js` from `bower_components` to index.html 
 * add `ngRoute` dependency to application

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
