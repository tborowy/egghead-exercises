#Exercise 23 : templateCache

##Summary
An application can render same data in several different ways. The displayed templates are changed based on user interaction. To improve user experience template cache is used.

##Goals
Utilise `templateCache` to store templates and render them in the directive. You start with two keywords: button, table - they represent coresponding templates:
 
* button - displays when **button** is entered
* table - displays when **table** is entered
* default - displays in any other case

**Hint**: use `element.html(value)` before compile, to assign templateCache into the DOM
            

##Before you start, please refer to:
* [angular templateCache](https://egghead.io/lessons/angularjs-templatecache)
* [$compile](https://code.angularjs.org/1.2.16/docs/api/ng/service/$compile)
* [$watch](https://egghead.io/lessons/angularjs-the-basics-of-scope-watch)

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
