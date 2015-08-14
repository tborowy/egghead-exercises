#Exercise 15 : Isolate Scope Review

##Summary
Use the arcane knowledge of the isolate scope to successfully complete the task. Start your job in **box** directive. Inside is a ready template (`boxTemplate.html`) of the form about (surprise!) box.
Implement directive that will allow to set size of box in each form, set color in all forms when you change it in one, display information about box. Use directive to create three forms with different box sizes (50px,70px,90px).

##Goals
* use `size`, `color`, `open` as names of isolated scope properties 
* color should be selecting from list
* **Tell me about yourself!** button should show alert with information about name, size and color
* display size of the box in **h3** tag
* the size of the displayed box should change - add appropriate attribute to `ng-style="{\'background-color\':color}"` 

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

To start unit test, run

```
grunt karma
```

###Before you start, please refer to:
* [angularjs-isolate-scope-review](https://egghead.io/lessons/angularjs-isolate-scope-review)

Good luck!
