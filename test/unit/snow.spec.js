describe('snow', function ()
{
    'use strict';

    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope)
    {
        scope = $rootScope.$new();

        $controller('SnowCtrl', {$scope: scope});
    }));


    describe('addPetal function', function ()
    {
        it('should add petal to snow list', function ()
        {
            scope.addPetal();
            expect(scope.snow).toEqual([{petal: '*'}]);
        });

        it('should add two petals to snow list', function ()
        {
            scope.addPetal();
            scope.addPetal();
            expect(scope.snow).toEqual([{petal: '*'}, {petal: '*'}]);
        });
    });

    describe('removePetal function', function ()
    {
        beforeEach(function ()
        {
            scope.addPetal();
            scope.addPetal();
            scope.addPetal();
        });
        it('should remove one petal from snow list', function ()
        {
            scope.removePetal();
            expect(scope.snow).toEqual([{petal: '*'}, {petal: '*'}]);
        });

        it('should remove all petals', function ()
        {
            scope.removePetal();
            scope.removePetal();
            scope.removePetal();

            expect(scope.snow).toEqual([]);
        });
    });


});
