describe("directives", function ()
{
    var circle;
    var square;
    var $scope;

    beforeEach(inject(function ($compile, $rootScope)
    {
        $scope = $rootScope;
        square = angular.element('<div click-on="bg-info" class="square center-block"></div>');
        circle = angular.element('<div enter class="circle center-block"></div>');
        circle = $compile(circle)($rootScope);
        square = $compile(square)($rootScope);
    }));

    <!-- click-on directive test-->
    <!-- enter directive test-->

});