(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
  }

  //function promiseButtonsConfig(angularPromiseButtonsProvider) {
  //    angularPromiseButtonsProvider.extendConfig({
  //        spinnerTpl: '<pulse-spinner></pulse-spinner>',
  //        disableBtn: true,
  //        addClassToCurrentBtnOnly: false,
  //        disableCurrentBtnOnly: false
  //    });
  //}

})();
