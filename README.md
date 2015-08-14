#Exercise 11 : Understanding isolate scope

##Summary
You are a owner of a small sea cargo company. Everyday, you are checking the weather reports to make sure the conditions allow your fleet to depart from the port. 
This is very tiring and you decide to create a simple application that will allow you to automatically check weather conditions and report to the boat.

Local weather monitoring station provide a very simple API with an example how to use it so you don't have to worry about the data.

Moreover, you plan to share your application with others so you need to create it as a directive accepting custom reporting function and conditions message. 
Every boat captain should also be able to set their boat type, because some boats are not able to withstand heavy rain or wind.

##Goals

* `shipSender` directive in **port.js**:
	* should be expecting to receive two attributes passed to it's isolate scope: a `customCheck` function and `conditions` string
	* in **Check** button ng-click directive should be added and invoke `customCheck`(with **boat** model and **conditions** passed as 
	parameters)
	* template should assign returning value from **customCheck** to **answer** variable ( ***Hint***: you can assign variable in ng-click directive)
* **weatherConditions** (use correct method as indicated in comment) and **checkMyBoat** function should be passed to **shipSender** directive
* three **shipSender** directive instances added to correct place and with proper parameters to **index.html**(check comments)


###Before you start, please refer to:
* [angularjs-understanding-isolate-scope](https://egghead.io/lessons/angularjs-understanding-isolate-scope)
* [angularjs-isolate-scope-attribute-binding](https://egghead.io/lessons/angularjs-isolate-scope-attribute-binding)

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
