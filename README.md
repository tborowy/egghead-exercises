##Exercise 42 : Using angular.bootstrap to Initialize Your App
Use angular.bootstrap to replace all the ng directives (ng-app, ng-controller, ng-repeat) that you will find in the file index.html.

###Requirements
* create two directives:
    * ***lucky*** responsible for **randomPrinter()** function
    * ***printerTable*** responsible for list of printers 
    * put a piece of code responsible for the display of the table in a separate file and add it to the directive using ***templateUrl*** property
    
    ```templateUrl: 'printerTable.html'```


###Result
The result of the exercises should be application that displays a list of printers and a random printer. In the file index. html cannot be ng-elements.


###Before you start, please refer to:
* [angularjs-angular-bootstrap-app-init](https://egghead.io/lessons/angularjs-angular-bootstrap-app-init)
* [angularjs-with-no-custom-markup](https://egghead.io/lessons/angularjs-with-no-custom-markup)

Good luck!