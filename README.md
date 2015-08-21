#Exercise 32 : Components and Containers

##Summary
You are provided with two directives (`myContainer`,`myComponent`) and template files (container.html, component.html).  In component view you should be able to display as many `myComponent`s as you want. In the container view as many `myComponent`s as you want.
 but they should be inside a `myContainer`.

##Goals

* when user chooses `component` view:

    * should see a list of components
	* the **name** of the next component should be `This directive is simple component <number>'` where number is the next index of the list.

* when user chooses `container` view:

	* should see a list of components inside the container
	* container **name** should be `CONTAINER BOX`
	* names of the components should be displayed as in the `component` view
    * **remember!** you are not supposed to put the components inside the `myContainer` directive **template**
      
##Before you start, please refer to:
* [angularjs-components-and-containers](https://egghead.io/lessons/angularjs-components-and-containers)

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
