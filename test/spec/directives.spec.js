describe("directives", function ()
{
    var circle;
    var square;
    var $scope;

    beforeEach(module("myApp"));
    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        circle = angular.element('<div enter leave class="circle center-block"></div>');
        circle = $compile(circle)($rootScope);
    }));

    describe("circle", function ()
    {
        it("should add bg-info a class when mouseenter", function ()
        {

        });

        it("should respond to a mouseenter event", function ()
        {

        });

        it("should remove bg-info class when mouseleave", function ()
        {

        });

        it("should respond to a mouseleave event", function ()
        {

        });
    });
});