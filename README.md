#Exercise 27 : resolve $routeChangeError

##Summary
Application has no validation of route params. You have to handle route change error event to improve user experience. Final application should display a message that depends on the validation result.

##Goals
* define function that will return rejected promise
* extend `/order` route configuration by adding resolve object with function from previous point
* handle error by setting listener to `$routeChangeError` event
* grab the data from rejection argument of the listener function and pass it to proper variable (refer to `order.html` file to find out the names) 
* the submitting product form should have this behavior: 
	* if quantity or price field is empty - display message : "You gave wrong data" inside red alert (`alert alert-danger` bootstrap class) and set cost of product to 0
	* if quantity and price are fill display message : "You gave correct data" inside green alert (`alert alert-success` bootstrap class) and calculate cost of products (price * quantity)                     
 
##Before you start, please refer to:
* [angularjs-resolve-conventions](https://egghead.io/lessons/angularjs-resolve-conventions)
* [angularjs-resolve-routechangeerror](https://egghead.io/lessons/angularjs-resolve-routechangeerror)

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
