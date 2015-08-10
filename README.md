##Exercise 24 : ngView

##Summary
AngularJS's ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (typically the index.html) file.

The application is already setup but ngView is not utilised.

##Goals
 * configure the routing to display `home.html` page with `message` from controller at `/` path
 * DON'T change `home.html` file and `RouteCtrl`

###Before you start, please refer to:
* [angularjs-ng-view](https://egghead.io/lessons/angularjs-ng-view)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

###ngRoute
* pay attention on **AngularJS 1.2.x Routing Changes: ngRoute** below the movie
* add `angular-route.js` from `bower_components` to index.html 
* add `ngRoute` dependency to application

Good luck!
