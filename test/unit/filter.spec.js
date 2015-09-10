(function ()
{
    'use strict';

    describe('controller', function ()
    {
        var scope;
        var filterCtrl;
        beforeEach(module('myFilter'));

        beforeEach(inject(function ($controller, $rootScope)
        {
            scope = $rootScope.$new();
            filterCtrl = $controller('FilterCtrl', {$scope: scope});

        }));

        describe('data', function ()
        {
            it('should set data.citation', function ()
            {
                expect(scope.data.citation).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
            });
            it('should set data.title', function ()
            {
                expect(scope.data.title).toEqual('The Hobbit: The Battle of the Five Armies');
            });
            it('should set data.someText', function ()
            {
                expect(scope.data.someText).toEqual('Visit BBC News for up-to-the-minute news, breaking news, video, audio and stories.');
            });
        });
    });

    describe('filter', function ()
    {
        //add star filter tests
        //add withoutSpace filter tests
        //add onlyFirstLetterUpp filter tests

    });
})();
