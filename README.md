#Exercise 9 : Directives 

##Summary
Application requires you to change the element behavior based on the specific event. You are supposed to write four directives that bind events to two provided 
canvas. 

##Goals
When you move your mouse over the provided circle(check comments) bootstrap class should be added. It should be handled by `enter` directive.
When you leave the area it should be removed back (use `leave` directive to remove the class). 


Secondly, when you click the square it should add a provided class to the square (using `clickOn` directive) and when you double click - it should be removed
 (using dbClickOn` directive).

 
 Please be aware that you should be able to pass specified bootstrap class as an argument to the directive.
* **index.html** should be fixed to achieve the correct behavior for the circle and square mentioned before(also check comments)
* **bg-danger** passed as an attribute to enter directive
* **bg-info** passed as an attribute to clickOn directive

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
