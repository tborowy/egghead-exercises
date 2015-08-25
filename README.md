#Exercise 15 : Isolate Scope Review

##Summary
Use the arcane knowledge of scope isolation to successfully complete the task. You are provided with a unfinished template (`boxTemplate.html`) 
with the form. Implement directive that will allow you to set the size of the box in each form, set color in all forms when you change it in one, 
display information about the box. 

##Goals
* use `size`, `color`, `open` as names of isolated scope properties 
* color should be selected from the list
* button in each of the forms should show an alert with information about the name, size and color of the specific form
* display size of the box in **h3** tag
* the size of the displayed box should change according to the size property and add appropriate attribute to `ng-style="{\'background-color\':color}"` 
* use directive to create three forms with different box sizes (50px,70px,90px)

###Before you start, please refer to:
* [angularjs-isolate-scope-review](https://egghead.io/lessons/angularjs-isolate-scope-review)

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

Good luck!
