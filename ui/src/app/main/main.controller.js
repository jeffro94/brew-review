(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(brewService, $timeout) {
      var vm = this;

      vm.isRatingReadonly = true; // hard coded since the ratings are always read-only on the main screen

      vm.isPageLoading = true;

      $timeout(function () {
          brewService.getShops().then(
              function (result) {
                  vm.shops = result;
                  vm.isPageLoading = false;
              }
          )
      }, 500);
  }
})();
