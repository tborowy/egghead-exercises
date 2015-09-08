#Exercise 1 : Binding

##Summary
Application displays three inputs and an artists table. Each class attribute of the row which is binded to one of the input values by order. By inputting a text will result in a color change of the table row.

##Goals
You are required to implement a solution that will result in such behavior:
a value input should be taken as table row class attribute, so after typing 'warning' in the first input then the first table row should be displayed with a class warning. This implies for the other input and rows as well.

###Before you start, please refer to:
* [angularjs-binding](https://egghead.io/lessons/angularjs-binding)
* **bootstrap classes** are used for coloring table rows [contextual classes](http://getbootstrap.com/css/#tables)

### + Bonus task
Try to connect input fields with columns of the table.

##Setup
 You should have `npm`, `bower`, `grunt-cli`  packages installed to run this example.
 
###To resolve dependencies run:

```
npm install
```

```
bower install
```

###To run the application:

```
grunt serve
```

###To test the application:

You must install protractor as an admin: 

```
npm install -g protractor
```

```
webdriver-manager update --standalone
```
        
In order to test the application you must have `webdriver-manager` running in background.

```
webdriver-manager start
```

To run protractor tests:

```
npm run protractor
```

Good luck!
