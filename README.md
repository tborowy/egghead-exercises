#Exercise 13 : Directives talking to controllers

##Summary
In this exercise, your challenge is to share information between the controller and the directive. 
Implement a functionality that will allow you to add (when the mouse hovers over the green square) and remove (when the mouse hovers over the green square) 
snowflake. Snowflakes should be displayed in `Let it snow` section.

##Goals
* **snow.js** file should contain ***enter*** directive which talks to the `SnowCtrl` controller 
* create ***addPetal*** and ***removePetal*** functions to add and remove a snowflake from  the `snow` array
* the snowflake consist of a star `< span id="petal" class="glyphicon glyphicon-star"></ span>` and flake `*`
* enjoy the stellar snow :)

**Hint**
You can use ng-repeat directive and combine them together into one petal.

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
