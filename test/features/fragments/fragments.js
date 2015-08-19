/*global element,by*/
var byString = function (object, fragmentName)
{
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text)
{
    'use strict';

    var mapping = {
        vehicle: element.bind(null, by.css('vehicle')),
        car: element.bind(null, by.css('vehicle car:first-child')),
        audi: element.bind(null, by.css('vehicle car audi:first-child')),
        bus: element.bind(null, by.css('vehicle bus:nth-child(2)')),
        jelcz: element.bind(null, by.css('vehicle bus jelcz:first-child')),
        driveCarMessage: element.bind(null, by.css('vehicle car audi:first-child h3')),
        driveBusMessage: element.bind(null, by.css('vehicle bus jelcz:first-child h3')),
        button: {
            carDrive: element.bind(null, by.css('#driveCarButton')),
            seatBelts: element.bind(null, by.css('#seatBeltsButton')),
            busDrive: element.bind(null, by.css('#driveBusButton')),
            emergencyBrake: element.bind(null, by.css('#emergencyBrakeButton'))
        },
        input: {
            driveCar: element.bind(null, by.css('#driveCar')), driveBus: element.bind(null, by.css('#driveBus'))
        }


    };

    return byString(mapping, text);
};

module.exports = fragments;
