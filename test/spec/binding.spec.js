describe("binding", function ()
{
    var text;
    var operation;

    beforeEach(function ()
    {
        text = angular.element('<div>{{"Ala" +  " has " + 3 + " cats"}}</div>');
        operation = angular.element('<div>{{111 * 111}}</div>');

    });

});