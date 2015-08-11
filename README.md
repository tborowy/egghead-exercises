#Exercise 25 : $routeProvider

##Summary
You are provided with templates and controllers. Use your knowledge of services such as `$routeProvider`, `$routeParams` to configure routing.

##Goals

* set home.html as a default page template
* brand and engine capacity from inputs should be used as route params (**hint:**  look at `home.html` "Next" button)
* "Next" button should redirect to details.html page (path should start with details/)
* "Back" button should redirect to `home.html` page,
* there is the secret page - your job is to get us there 
* having entered the word `special` in any of the fields, you should be directed to `secret.html` page  (**hint:** check if the path contains the word `special`)


##Before you start, please refer to:
* [angularjs-routeprovider-api](https://egghead.io/lessons/angularjs-routeprovider-api)
* [angularjs-routeparams](https://egghead.io/lessons/angularjs-routeparams)
* [angularjs-redirectto](https://egghead.io/lessons/angularjs-redirectto)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially

```
npm install
```

```
bower install
```

To start the application, run

```
grunt serve
```

To start cucumber tests, run sequentially in separate terminals the application and command

```
grunt test
```

Good luck!
