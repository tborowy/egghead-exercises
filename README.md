#Exercise 28 : Directive for route handling

##Summary
You are taking a walk in the forest. After few hours you approach a crossroads. You do not remember which way you are supposed to go, meaning that
you need to take a guess. This application show the same situation. You are provided with `crossroads` view that allow you to choose the direction.
You are supposed to implement a functionality that will show the information that you have reached your destination or dead end depending on
chosen path.

##Goals
* When user choose left direction, he should be redirected in 1000 milliseconds to the `error` view but it should not be resolved (instead it is supposed
  to show crossroads template with error message)
* The `error` directive should make use of route provider events to catch the error produced while resolving the view. In that case you are supposed to
  change following properties on `CrossroadsCtrl` scope:
        * `alertMessage` should be set to 'Dead end! You went in the wrong direction!'
        * `alertColor` should be set to **alert-danger**
        * `moved` should be set to true
* Having the right button clicked, the success view should be resolved after 1000 milliseconds. The success view is supposed to display
  'Great job! You have reached your destination!' as a `alertMessage`

##Before you start, please refer to:
* [angularjs-directive-for-route-handling](https://egghead.io/lessons/angularjs-directive-for-route-handling)


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


Good luck!
