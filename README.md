#Exercise 17: An alternative approach to controllers

##Summary
An alternative approach to controllers assumes that function should be assigned to controller, not to the $scope. You task is to implement functionality according
to the regulations below.

##Goals

* `Calc.js` should contain `SumCtrl` and `SubCtrl` controllers
* `SumCtrl` should has `addition` function assigned to itself, which requires two params and assigns the result to `sum` variable
* similarly `SubCtrl` but should assigns the result to `sub` variable
* each controller should have two variables (`firstNumber`, `secondNumber`) initialized values **12** and **1**
* use `addition`  and `subtraction` function and display the result in correct header (check comments)

##Before you start, please refer to:
* [angularjs-an-alternative-approach-to-controllers](https://egghead.io/lessons/angularjs-an-alternative-approach-to-controllers)

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
