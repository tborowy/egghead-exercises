var app = angular.module("app", []);

app.factory("printerList", function ()
{
    return [
        {name: 'Brother MFC-J470DW', type: 'All-In-One', inkNumber: 4},
        {name: 'Canon Pixma iP8720 Wireless Inkjet Photo Printer', type: 'Printer Only', inkNumber: 6},
        {name: 'Epson WorkForce WF-3640', type: 'All-In-One', inkNumber: 4},
        {name: 'Epson WorkForce Pro WF-5190', type: 'Printer Only', inkNumber: 4},
        {name: 'Epson WorkForce Pro WF-5620', type: 'All-In-One', inkNumber: 4}
    ];
});

app.controller("PrinterCtrl", function (printerList)
{
    this.printerList = printerList;

    this.randomPrinter = function ()
    {
        return printerList[Math.floor(Math.random() * printerList.length)].name;
    }
});