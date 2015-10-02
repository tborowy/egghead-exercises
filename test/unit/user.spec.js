describe('user', function ()
{
    'use strict';

    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope, Users)
    {
        scope = $rootScope.$new();

        $controller('UserCtrl', {$scope: scope, Users: Users});
    }));


    describe('default limit rows', function ()
    {
        it('should be set to 15', function ()
        {
            expect(scope.limit).toEqual(15);
        });
    });
    describe('default sort', function ()
    {
        it('should be set to id', function ()
        {
            expect(scope.choice).toEqual('id');
        });
    });

    describe('reverse function', function ()
    {
        it('should set choice id column', function ()
        {
            scope.reverseSort('id');
            expect(scope.choice).toEqual('id');
        });

        it('should set choice username column', function ()
        {
            scope.reverseSort('username');
            expect(scope.choice).toEqual('username');
        });

        it('should set choice fullName column', function ()
        {
            scope.reverseSort('fullName');
            expect(scope.choice).toEqual('fullName');
        });

        it('should set choice gender column', function ()
        {
            scope.reverseSort('gender');
            expect(scope.choice).toEqual('gender');
        });

    });

});
