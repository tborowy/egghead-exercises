#Exercise 13 : Directives talking to controllers

##Summary
In this exercise, your challenge is to share information between the controller and the directive. 
Implement functionality that will allow to add (when the mouse hovers over the green square) and remove (when the mouse hovers over the green square) snowflake.

##Goals
* **snow.js** file should contain ***enter*** directive which talks to controller ***SnowCtrl***
* create ***addPetal*** and ***removePetal*** functions to add and remove snowflake form ***snow*** array
* first part of snowflake is an object `{petal: '*'}` you put and remove from array
* second part of snowflake is a star pattern `< span id="petal" class="glyphicon glyphicon-star"></ span>` 
* use ng-repeat directive and combine them together into one petal
* enjoy the stellar snow :)

###Before you start, please refer to:
* [angularjs-directives-talking-to-controllers](https://egghead.io/lessons/angularjs-directives-talking-to-controllers)

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
