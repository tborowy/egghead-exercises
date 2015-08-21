'use strict';

var reqApp = angular.module('reqApp', []);

reqApp.controller('ReqCtrl', function ()
{
    this.updateTitle = false;
    this.selectedReq = null;
    this.requirementCopy = null;

    this.reqCollection = [{
        title: 'Programmer', url: 'assets/customer.png', description: 'How the customer explained it'
    }, {
        title: 'Documentation', url: 'assets/business.png', description: 'How the business consultant described it'
    }, {
        title: 'Consultant', url: 'assets/documented.png', description: 'How the project was documented'
    }, {
        title: 'Customer', url: 'assets/programmer.png', description: 'How the programmer worked it'
    }];

    this.update = function ()
    {
        this.updateTitle = true;

    };

    this.save = function ()
    {
        this.updateTitle = false;
    };

});
