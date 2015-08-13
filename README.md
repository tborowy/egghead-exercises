#Exercise 9 : Directives 

##Summary
Application require you to change element behavior based on specific event. You are supposed to write four directives that bind events to two provided canvas. 

When you move your mouse over the provided circle(check comments) bootstrap class should be added, on the other hand when you leave the area it should be 
removed back. Secondly, when you double click square it should add provided class to the square and when you single click - it should be removed. Please be aware
that you should be able to pass specified bootstrap class as argument to the directive.

##Goals
* `enter` directive should add class provided as attribute in **index.html** when **mouseenter** is fired
* `leave` directive should remove class provided as attribute to enter directive in **index.html** when **mouseleave** is fired
* `dbClickOn` directive should add class provided as attribute in **index.html** when **dblclick** is fired
* `clickOn` directive should remove class provided as attribute to dblClickOn directive in **index.html** when **clickOn** is fired
* **index.html** should be completed to achieve correct behavior for circle and square mentioned before(also check comments)
* **bg-danger** passed as an attribute to enter directive
* **bg-info** passed as an attribute to dblClickOn directive

**Hint**
`camelCase` directives should be use inside .html files in this way: `camel-case`  

##Before you start, please refer to:
* [angularjs-basic-behaviors](https://egghead.io/lessons/angularjs-basic-behaviors)
* [angularjs-useful-behaviors](https://egghead.io/lessons/angularjs-useful-behaviors)
* [jquery/bind](http://api.jquery.com/bind/)


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

To run unit tests:

```
grunt karma
```

Good luck!
