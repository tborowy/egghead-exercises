#Exercise 12 : Isolate Scope "@", "="

##Summary
Application that you are provided with is used for handling simple orders from customers. It includes simple list of products available for ordering
as well as basic functions. 

The main problem is that all products from different categories are now stacked in one select component and newest requirements
specify that you should have multiple components for different categories. Being smart you instantly decide that you should create only one directive
and use it multiple times. 

Assuming that you need to pass custom order function(that accepts product as a parameter) and list of custom products(category)
you are asked to create ***orderComponent*** directive with isolate scope and use it to allow user to order from **sweets** and **cakes** categories.


##Goals

* Edit **orderComponent** element directive so that it would have **products** field and **buy** function passed as attributes in correct 
format(directive should have isolate scope)
* In **orderComponent** template:
    * ```<select>``` element(check comment) should be instantiated from **products** array(as options)
    * ```<select>``` element model should have be available only on the directive scope and be set to first element of the **products** array as default
    * the bottom div element(check comment) should have **buy** function invocation binded on click (with ```<select>``` element model passed as argument)
* **index.html** must contain two separate order components for **cakes** and **sweets** products(they are already included on **appCtrl** scope, 
check comments to place them correctly)
* Both **orderComponent** instances in **index.html** should use **buyProduct** function(already included on **appCtrl** scope, expects product as argument)

##Before you start, please refer to:
* [angularjs-isolate-scope-attribute-binding](https://egghead.io/lessons/angularjs-isolate-scope-attribute-binding)
* [ngularjs-isolate-scope-two-way-binding](https://egghead.io/lessons/angularjs-isolate-scope-two-way-binding)
* [ngOptions example](https://docs.angularjs.org/api/ng/directive/ngOptions/#example)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

Good luck!
