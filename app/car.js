'use strict';

var app = angular.module('app', []);

app.provider('partsList', function ()
{
    var lists = [{
        name: 'engine', enable: false
    }, {
        name: 'brakes', enable: true
    }, {
        name: 'steering wheel', enable: true
    }, {
        name: 'wheel', enable: false
    }];
    var set = function (value)
    {
        var tmp = {};
        angular.forEach(lists, function (part)
        {
            if (value === part.name) {
                part.enable = !part.enable;
                tmp = part;
            }
        });
        return tmp.enable;
    };
    var setToTrue = function (value)
    {
        var tmp = {};
        angular.forEach(lists, function (part)
        {
            if (value === part.name) {
                part.enable = true;
                tmp = part;
            }
        });
        return tmp.enable;
    };

    return {
        $get: function ()
        {
            return {
                set: set, setToTrue: setToTrue, lists: lists
            };
        }
    };
});

app.controller('CarCtrl', function ($timeout, partsList)
{
    var ctrl = this;
    ctrl.lists = partsList.lists;
    ctrl.data = {lists: ctrl.lists[0].name};
    ctrl.result = false;

    ctrl.chooseCarPart = function ()
    {
        if (ctrl.data.part !== undefined) {
            ctrl.carPart = ctrl.data.part;
            ctrl.returnMessage = '';
            ctrl.show = true;
        }
    };

    ctrl.checkNow = function ()
    {
        $timeout(function ()
        {
            //here you should use partsList.set()
            if (partsList.set(ctrl.carPart)) {
                ctrl.returnMessage = 'This part is available and is very cheap';
            } else {
                ctrl.returnMessage = 'This part is NOT available and is very expensive...';
            }
            ctrl.result = true;
        }, 10);
    };
    ctrl.wait = function ()
    {
        $timeout(function ()
        {
            //here you should use partsList.setToTrue()
            if (partsList.setToTrue(ctrl.carPart)) {
                ctrl.returnMessage = 'This part is available and is very cheap';
            }
            ctrl.result = true;
        }, 1800);
    };
});
