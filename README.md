#Exercise 2 : Controller

##Summary
Applications often need to display value that user has entered. You are provided with simple view containing title, three inputs and display board. Your task is to
implement functionality that will allow inputs to be displayed along with the information on the title and board.

##Goals
* create **FruitCtrl** file with `FruitCtrl` controller belonging to `app` module
* in controller add three properties: `seller, name, count` with some default values
* comments in `index.html` should be replaced with appropriate values from the inputs

##Before you start, please refer to:
* [angularjs-controller](https://egghead.io/lessons/angularjs-controllers)

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
