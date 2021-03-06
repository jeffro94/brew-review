﻿(function () {
    'use strict';

    angular
        .module('app.edit')
        .controller('EditController', EditController);

    /** @ngInject */
    function EditController($scope, brewService, shop, $log, toastr, $timeout) {
        var vm = this;

        vm.shop = shop;

        vm.submitForm = function (isValid) {
            if (!isValid) {
                return;
            }

            vm.loadingPromise = $timeout(function () {
                brewService.updateShop(vm.shop).then(
                    function () {
                        toastr.success('Shop successfully updated!');
                    },
                    function (error) {
                        $log.error('Error updating shop.\n' + angular.toJson(error.data, true));
                    }
                )
            }, 2000);
        }

        vm.delete = function () {
            vm.loadingPromise = brewService.deleteShop(vm.shop.key).then(
                function () {
                    toastr.success('Shop successfully deleted!');
                },
                function (error) {
                    $log.error('Error deleting shop.\n' + angular.toJson(error.data, true));
                }
            );
        }
    }

})();