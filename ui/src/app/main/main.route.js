(function () {
    'use strict';

    angular
      .module('app.main')
      .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider) {
        $stateProvider
          .state('home', {
              url: '/',
              templateUrl: 'app/main/main.html',
              controller: 'MainController',
              controllerAs: 'vm',
              resolve: {
                  shops: function (brewService) {
                      return brewService.getShops();
                  }
              }
          });

    }

})();
