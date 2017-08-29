(function () {
    'use strict';

    angular
        .module('app')
        .factory('brewService', brewService);

    function brewService($log, $http) {
        var service = {
            getShops: getShops,
            getShop: getShop,
            updateShop: updateShop,
            addShop: addShop,
            deleteShop: deleteShop
        };

        // return the instance of the service
        return service;

        // Get all the shops
        function getShops() {
            return $http.get('https://brewapi.azurewebsites.net/api/coffeeshop/')
              .then(success)
              .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                $log.error('XHR Failed for getShops.\n' + angular.toJson(error.data, true));
            }
        }

        // Get a specific shop by Id
        function getShop(shopId) {
            return $http.get('https://brewapi.azurewebsites.net/api/coffeeshop/' + shopId)
              .then(success)
              .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(error) {
                $log.error('XHR Failed for getShop.\n' + angular.toJson(error.data, true));
            }
        }

        // Update an existing shop
        function updateShop(shop) {
            var config = {
                method: 'PATCH',
                url: 'https://brewapi.azurewebsites.net/api/coffeeshop/' + shop.key,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: angular.toJson(shop, false)
            };

            return $http(config)
              .then(success)
              .catch(fail);

            function success() {
                return "yes";
            }

            function fail(error) {
                $log.error('XHR Failed for updateShop.\n' + angular.toJson(error.data, true));
            }
        }

        // Add a new shop
        function addShop(shop) {
            var config = {
                method: 'POST',
                url: 'https://brewapi.azurewebsites.net/api/coffeeshop/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: angular.toJson(shop, false)
            };

            return $http(config)
              .then(success)
              .catch(fail);

            function success() {
                return "yes";
            }

            function fail(error) {
                $log.error('XHR Failed for addShop.\n' + angular.toJson(error.data, true));
            }
        }

        // Delete a  shop
        function deleteShop(shopId) {
            var config = {
                method: 'DELETE',
                url: 'https://brewapi.azurewebsites.net/api/coffeeshop/' + shopId
            };

            return $http(config)
              .then(success)
              .catch(fail);

            function success() {
                return "yes";
            }

            function fail(error) {
                $log.error('XHR Failed for deleteShop.\n' + angular.toJson(error.data, true));
            }
        }

    }

})();
