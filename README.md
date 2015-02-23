##Exercise 47: Unit Testing Directive Scope Binding
Test  **change** directive which updates the information about the **person** on double click.

###Requirements
* to call the events instead of ```browserTrigger(element,'click')``` use ```element.triggerHandler('click')```
* to use isolate scope instead of ```element.scope()``` use ```element.isolateScope()``` 
* in **should update person object on double click** case use ```toEqual``` instead of ``toBe```
* check in each test both cases, for example:
    * ```element.isolatedScope().ehSimple.message```
    * ```$scope.data.message```

###Result
* make sure that the persons concerned have been updated correctly: 
    * first name should be uppercase,
    * last name should be lowercase, 
    * age should be equal 18

### Test Configuration:
* ```npm install```
* ```bower install```
* Run -> Edit Configuration -> Press plus button -> Pick up Node.js
* set JavaScript file to ```node_modules\karma\bin\karma```
* set Application parameters to ```start test\karma.conf.js```

###Before you start, please refer to:
* [angularjs-unit-testing-directive-scope-binding](https://egghead.io/lessons/angularjs-unit-testing-directive-scope-binding)

Good luck!
