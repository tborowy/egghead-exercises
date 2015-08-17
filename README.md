#Exercise 25 : $routeProvider

##Summary
You are provided with templates and controllers. Use your knowledge of services such as `$routeProvider`, `$routeParams` to configure routing.

##Goals

* set `home.html` as a default page with appropriate controller (that initialize car brand and capacity) 
* brand and engine capacity from inputs should be used as route params (**hint:**  look at `home.html` "Next" button)
* **Next** button should redirect to details.html page if both parameters were entered (path should start with `details/`)
* there is the secret page - your job is to get us there 
* having entered the word `special` in any of the fields, you should be directed to `secret.html` page  (**hint:** check if the path contains the word `special`)


##Before you start, please refer to:
* [angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)
* [angularjs-routeparams](https://egghead.io/lessons/angularjs-routeparams)
* [angularjs-redirectto](https://egghead.io/lessons/angularjs-redirectto)

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
