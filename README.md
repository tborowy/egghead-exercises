#Exercise 3 : Sharing data between controllers

##Summary
Controllers often need to communicate and share data. You are given a task to create functionality to share data between two controllers.
Modify `index.html` file to share data between `LeftCtrl` and `RightCtrl`.

##Goal
Your task is to add **ng-controller's** and **ng-model's** in appropriate place so after type something in left or right input update messages below. 
Remember that all inputs should be binded to the same property. Example result

| some text  	|                  	|
|--------------	|----------------	|
| some text  	| some text  	    |



|              |another text       	|
|--------------|----------------	|
| another text | another text       |

##Before you start, please refer to:
* [angularjs-the-dot](https://egghead.io/lessons/angularjs-the-dot)

##Setup
You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. First, run sequentially:

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
