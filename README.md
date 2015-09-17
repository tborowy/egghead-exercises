#Exercise 3 : Sharing data between controllers

##Summary
Controllers often need to communicate and share data with each other. You are given a task to create a functionality to share data between two controllers.
Modify `index.html` file to share data between `LeftCtrl` and `RightCtrl`.

##Goal
Use **ng-model** in indicated places to ensure that after typing something in left or right input, both message holders are updated. Remember that all inputs 
should be bound to the same property.

**Hint**
Take a look at `ng-init` directive in `index.html` file

Type text in left input

| **some text**	| some text     	|
|--------------	|----------------	|
| some text  	| some text  	    |


Type text in right input

| another text | **another text**  	|
|--------------|----------------	|
| another text | another text       |

##Before you start, please refer to:
* [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot)

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

```
npm test
```

Good luck!
