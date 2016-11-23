(function () {
    'use strict';

    angular
        .module('app.add')
        .controller('AddController', AddController);

    /** @ngInject */
    function AddController($scope, brewService, $log, toastr) {
        var vm = this;
        
        vm.shop = {};

        vm.submitForm = function (isValid) {
            if (!isValid) {
                return;
            }

            brewService.addShop(vm.shop).then(
                function () {
                    toastr.success('Shop successfully added!');
                },
                function (error) {
                    $log.error('Oh no, there was an error adding the shop.\n' + angular.toJson(error.data, true));
                }
            );
        }
    }

})();