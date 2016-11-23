(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(brewService) {
      var vm = this;

      brewService.getShops().then(function (result) {
          vm.shops = result;
      });

  }
})();
