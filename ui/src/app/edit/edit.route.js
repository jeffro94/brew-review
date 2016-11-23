(function () {
    'use strict';

    angular
      .module('app.edit')
      .config(routeConfig);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('edit', {
                url: '/edit/{shopId}',
                controller: 'EditController',
                controllerAs: 'vm',
                templateUrl: 'app/edit/edit.html',
                resolve: {
                    shop: function (brewService, $stateParams) {
                        return brewService.getShop($stateParams.shopId);
                    }
                }
            });
    }
})();
