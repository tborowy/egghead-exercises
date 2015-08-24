describe('angular-ui-router', function ()
{
    'use strict';
    var state;

    beforeEach(module('app'));

    beforeEach(inject(function ($state)
    {
        state = $state;
    }));

    describe('ui- route', function ()
    {
        describe('start state', function ()
        {
            it('should set path to "/start"', function ()
            {
                expect(state.get('start').url).toEqual('/start');

            });
            it('should set welcome.html as a template', function ()
            {
                expect(state.get('start').templateUrl).toEqual('views/welcome.html');

            });
        });
        describe('vPaintings state', function ()
        {
            it('should set path to "/vPaintings"', function ()
            {
                expect(state.get('vPaintings').url).toEqual('/vPaintings');

            });
            it('should set verticalPaintingList.html as a template', function ()
            {
                expect(state.get('vPaintings').templateUrl).toEqual('views/verticalPaintingList.html');

            });
            it('should set controller to PaintingListCtrl', function ()
            {
                expect(state.get('vPaintings').controller).toEqual('PaintingListCtrl');

            });
        });

        describe('hPaintings state', function ()
        {
            it('should set path to "/hPaintings"', function ()
            {
                expect(state.get('hPaintings').url).toEqual('/hPaintings');

            });
            it('should set horizontalPaintingList.html as a template', function ()
            {
                expect(state.get('hPaintings').templateUrl).toEqual('views/horizontalPaintingList.html');

            });
            it('should set controller to PaintingListCtrl', function ()
            {
                expect(state.get('hPaintings').controller).toEqual('PaintingListCtrl');

            });
        });
        describe('vPaintings details state', function ()
        {
            it('should set path to "/:detail"', function ()
            {
                expect(state.get('vPaintings.detail').url).toEqual('/:detail');

            });
            it('should set paintingDetail.html as a template', function ()
            {
                expect(state.get('vPaintings.detail').templateUrl).toEqual('views/paintingDetail.html');

            });
            it('should set controller to PaintingDetailCtrl', function ()
            {
                expect(state.get('vPaintings.detail').controller).toEqual('PaintingDetailCtrl');

            });
        });

        describe('hPaintings details state', function ()
        {
            it('should set path to "/:detail"', function ()
            {
                expect(state.get('hPaintings.detail').url).toEqual('/:detail');

            });
            it('should set paintingDetail.html as a template', function ()
            {
                expect(state.get('hPaintings.detail').templateUrl).toEqual('views/paintingDetail.html');

            });
            it('should set controller to PaintingDetailCtrl', function ()
            {
                expect(state.get('hPaintings.detail').controller).toEqual('PaintingDetailCtrl');

            });
        });
    });

});

