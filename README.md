##Exercise 35b: Directive Communication

##Summary
Sometimes directive have to use data from another directives and controllers, in this application you have to build chain of directives
which display template when previous directive is set to. Complete `country`, `state` and `details`.

You start with ready controllers, services and templates. Take a look at **home.html** file where you find nested directives used in the correct order.

##Goals
  * after you select **country**, you should be able to select **state**
  * when **country** and **state** are selected you should see table with **state details**
  * take a look at method:
    * `getListState` - return the list of states selected country
    * `getDetails` - return state details selected state  
 
##Before you start, please refer to:
* [angularjs-directive-communication](https://egghead.io/lessons/angularjs-directive-communication)


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
