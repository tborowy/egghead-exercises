#Exercise 10 : Directive restrictions

##Sumamry
Developers were discussing how to extend the application functionality. They decided that not only they will need some new elements on the page, but they also 
need to change the behavior of existing elements to meet current requirements. You are given a task to implement four directives that will serve as templates
for their use. Each of the directives should be restricted to a different property: element, attribute, class and finally comment. Furthermore, you should
provide a working example.

##Goals

* `restrictE` directive restricted to the element and with the template set to the example data as follows: **'{{description.element.name}}: {{description
.element.call}}'** 
* `restrictA` directive restricted to the attribute and with the template pattern exactly like in **restrictE** directive(but use description.attribute 
property)
* `restrictC` directive restricted to the class and with the template pattern exactly like in **restrictE** directive(but use description.class property)
* `restrictM` directive restricted to the comment. Furthermore, in the directive body *`alert('Restrict M: working...');`* should be added.
* please bear in mind that required data is already defined in **AppCtrl** controller
* **index.html** should be updated with example directive usages(check comments)


**Hint**
 
 `camelCase` directives should be use inside .html files in this way: `camel-case`  


##Before you start, please refer to:
* [angularjs-directive-restrictions](https://egghead.io/lessons/angularjs-directive-restrictions)
* [restrictions](https://docs.angularjs.org/guide/directive)

##Setup
 
###To install dependencies 

```
npm install
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

    npm test

Good luck!
