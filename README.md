#Exercise 20 : angular.element

##Summary
You start with a basic application that displays one input field.
The application should display a circle or square based on the input values.

##Goals
Complete the `findElement` directive:

 * it should be restricted as an element.
 * create new **h4** DOM element 
 * the new element should be appended and compiled as the directive template
 * the directive should react to any changes to the **input**.
    * when the **input** value is set to: *circle* or *square*, element class should be changed respectively to a `circle` or `square`.
    * in other cases, it should display a red message *`You did not enter *circle* or *square*`* (using **text-danger** class).
 
To add class to the element use **addClass('className')** function, to remove it use **removeClass('className')** and to add the text use **text(''someText')**.

##Before you start, please refer to:
* [angularjs-angular-element](https://egghead.io/lessons/angularjs-angular-element)
* [angularjs-the-basics-of-scope-watch](https://egghead.io/lessons/angularjs-the-basics-of-scope-watch)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example.

###To install dependencies: 

    npm install && bower install


###To start application in live reload mode:

    grunt serve
    
###Jshint
To run verify jshint:
    
    grunt jshint:default

###Run tests

To run e2e tests in development mode:

    grunt test:e2e

To run verify jshint, tests and coverage:

    npm test

Good luck!

