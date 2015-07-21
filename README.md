#Exercise 10 : Directive restrictions

##Sumamry
Developers were discussing how to extend application functionality. They decided that not only they need some new elements on the page, but they also need to 
change behavior of existing elements to meet current requirements. You are given a task to implement four directives that will serve as templates
for their use. Each of the directives should be restricted to a different property: element, attribute, class and finally comment. Moreover, you should
provide a working example.

##Goals

* ***restrictE*** directive restricted to the element and with template set to the example data as follows: `'{{description.element.name}}: {{description.element.call}}'`
Please bear in mind that required data is already defined in **AppCtrl** controller
* ***restrictA*** directive restricted to the attribute and with template pattern exactly like in **restrictE** directive(but use description.attribute property)
* ***restrictC*** directive restricted to the class and with template pattern exactly like in **restrictE** directive(but use description.class property)
* ***restrictM*** directive restricted to the comment. Moreover, in the directive body *`alert('directive M: working...");`* should be added.
* **index.html** should be updated with example directive usages(check comments)

##Before you start, please refer to:
* [angularjs-directive-restrictions](https://egghead.io/lessons/angularjs-directive-restrictions)
* [restrictions](https://docs.angularjs.org/guide/directive)

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

To start unit test, run

```
grunt karma
```

Good luck!
