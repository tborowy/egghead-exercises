describe("directives", function ()
{
    var $scope;
    var change;

    beforeEach(module("myApp"));
    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        $scope.person = {firstName: "John", lastName: "Watson", age: 21, email: "john.watson@email.com"};
        change = angular.element('<div change="person"></div>');
        change = $compile(change)($rootScope);
    }));

    describe("change", function ()
    {
        it("should update firstName on double click", function ()
        {

        });

        it("should update lastName on double click", function ()
        {

        });

        it("should update age on double click", function ()
        {

        });

        it("should update person object on double click", function ()
        {

        });
    });
});