#Exercise 33b: ng-repeat and $index, $event, $log

##Summary
This exercise is about **ng-repeat** directive with `$index`, `$event` and `$log`. Application should display a numbered list of buttons. Third and 
seventh button should be highlighted and after pressing redirect

##Goals
* display all elements from the `list` as  numbered from 1 buttons list
* set `id` button attribute to appropriate `$index` value
* add appropriate class to buttons 1
* after pressing the `Do nothing` button, you should see the message with coordinates
* after pressing the `Show log` button, you should be redirected to `checkLog.html` page
* on `checkLog.html` page you should see `log` in console (don't use **console.log**)

`addClass()` returns the class based on the parameters we send it. You can use it with ng-class directive based on example:

`< div ng-class="getClass(key)" >`

##Before you start, please refer to:
* [angularjs-index-event-log](https://egghead.io/lessons/angularjs-index-event-log)

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
