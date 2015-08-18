#Exercise 28 : Directive for route handling

##Summary
In this application, you are supposed to use $rootScope within an `error` directive to detect route change errors and display it with `alertMessage`.

##Goals
* when it detects route change error, you should see a message `You went in the wrong direction!` above than buttons, inside red alert (use `alert 
alert-danger` bootstrap class)
* use `ng-if` to display the error alarm only when you need it.

##Before you start, please refer to:
* [angularjs-directive-for-route-handling](https://egghead.io/lessons/angularjs-directive-for-route-handling)


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


Good luck!
