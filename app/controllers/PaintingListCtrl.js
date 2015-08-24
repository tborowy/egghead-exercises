(function ()
{
    'use strict';

    angular.module('app').controller('PaintingListCtrl', function ($scope, paintingList)
    {
        $scope.paintingList = paintingList;

        $scope.selectPainting = function (selectedPainting)
        {
            ($scope.paintingList).forEach(function (p)
            {
                p.selected = false;
                if (selectedPainting === p) {
                    selectedPainting.selected = true;
                }
            });
        };
    });
})();
