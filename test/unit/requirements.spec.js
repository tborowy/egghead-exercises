describe('requirements', function ()
{
    'use strict';

    var reqCtrl;
    var collection = [{
        title: 'Programmer', url: 'assets/customer.png', description: 'How the customer explained it'
    }, {
        title: 'Documentation', url: 'assets/business.png', description: 'How the business consultant described it'
    }, {
        title: 'Consultant', url: 'assets/documented.png', description: 'How the project was documented'
    }, {
        title: 'Customer', url: 'assets/programmer.png', description: 'How the programmer worked it'
    }];

    beforeEach(module('reqApp'));
    beforeEach(inject(function ($controller)
    {
        reqCtrl = $controller('ReqCtrl', {});

    }));

    describe('initialization', function ()
    {
        it('should set updateTitle to false', function ()
        {
            expect(reqCtrl.updateTitle).toBe(false);
        });
        it('should set selectedReq to null', function ()
        {
            expect(reqCtrl.selectedReq).toBe(null);
        });
        it('should set requirementCopy to null', function ()
        {
            expect(reqCtrl.requirementCopy).toBe(null);
        });
        it('should set reqCollection', function ()
        {
            expect(reqCtrl.reqCollection).toEqual(collection);
        });
    });
    describe('update() function', function ()
    {
        describe('update "Documentation"', function ()
        {
            beforeEach(function ()
            {
                reqCtrl.update(collection[1]);
            });

            it('should set updateTitle to true', function ()
            {
                expect(reqCtrl.updateTitle).toBe(true);
            });
            it('should set selectedReq to true', function ()
            {
                expect(reqCtrl.selectedReq).toBe(collection[1]);
            });
            it('should set requirementCopy to true', function ()
            {
                expect(reqCtrl.requirementCopy).toEqual(collection[1]);
            });
        });
        describe('update "Consultant"', function ()
        {
            beforeEach(function ()
            {
                reqCtrl.update(collection[2]);
            });

            it('should set updateTitle to true', function ()
            {
                expect(reqCtrl.updateTitle).toBe(true);
            });
            it('should set selectedReq to true', function ()
            {
                expect(reqCtrl.selectedReq).toBe(collection[2]);
            });
            it('should set requirementCopy to true', function ()
            {
                expect(reqCtrl.requirementCopy).toEqual(collection[2]);
            });
        });

    });
    describe('save() function', function ()
    {
        describe('save "Documentation"', function ()
        {
            beforeEach(function ()
            {
                reqCtrl.update(collection[1]);
                reqCtrl.requirementCopy.title = 'Consultant';
                reqCtrl.save();
            });

            it('should set updateTitle to true', function ()
            {
                expect(reqCtrl.updateTitle).toBe(false);
            });
            it('should set selectedReq to copy value', function ()
            {
                expect(reqCtrl.selectedReq.title).toBe('Consultant');
            });
        });
        describe('save "Consultant"', function ()
        {
            beforeEach(function ()
            {
                reqCtrl.update(collection[2]);
                reqCtrl.requirementCopy.title = 'Documentation';
                reqCtrl.save();
            });

            it('should set updateTitle to true', function ()
            {
                expect(reqCtrl.updateTitle).toBe(false);
            });
            it('should set selectedReq to copy value', function ()
            {
                expect(reqCtrl.selectedReq.title).toBe('Documentation');
            });

        });

    });

});
