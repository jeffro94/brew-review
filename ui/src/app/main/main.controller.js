(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(shops) {
      var vm = this;

      vm.shops = shops;
      vm.isRatingReadonly = true;
  }
})();
