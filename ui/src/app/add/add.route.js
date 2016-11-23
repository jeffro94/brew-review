(function () {
    'use strict';

    angular
      .module('app.add')
      .config(routeConfig);

    function routeConfig($stateProvider) {
        $stateProvider
            .state('add', {
                url: '/add',
                controller: 'AddController',
                controllerAs: 'vm',
                templateUrl: 'app/add/add.html'
            });
    }
})();
