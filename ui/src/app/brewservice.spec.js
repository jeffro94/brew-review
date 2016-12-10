(function () {
    'use strict';

    describe('Brew Service', function () {
        var brewService, $q, $httpBackend;

        var API = 'http://brewapi.azurewebsites.net/api/coffeeshop/';

        // hard coded list to test with
        var shopsList = [
            {
                "key": "1",
                "name": "Starbucks",
                "address": "10 S Federal Hwy, Fort Lauderdale, FL 33301",
                "rating": 3,
                "mediumCoffeePrice": 1.89
            }, 
            {
                "key": "2",
                "name": "Warsaw Coffee Co",
                "address": "815 NE 13th St, Fort Lauderdale, FL 33304",
                "rating": 4,
                "mediumCoffeePrice": 3.49
            }, 
            {
                "key": "3",
                "name": "Brew Urban Cafe",
                "address": "541 NW 1st Ave, Fort Lauderdale, FL 33301",
                "rating": 5,
                "mediumCoffeePrice": 2.49
            }
        ];

        var singleShop = {
            "key": "2",
            "name": "Warsaw Coffee Co",
            "address": "815 NE 13th St, Fort Lauderdale, FL 33304",
            "rating": 4,
            "mediumCoffeePrice": 3.49
        };

        var RESPONSE_ERROR = {
            'detail': 'Not found.'
        };

        // load the 'app' module
        beforeEach(angular.mock.module('app'));

        // inject the service and dependencies
        beforeEach(angular.mock.inject(function (_brewService_, _$q_, _$httpBackend_) {
            brewService = _brewService_;
            $q = _$q_;
            $httpBackend = _$httpBackend_;
        }));

        // verify the service exists
        it('should exist', function () {
            expect(brewService).toBeDefined();
        });

        // these are related to the .getShops() method
        describe('getShops()', function () {
            var result;

            beforeEach(function () {
                result = {}; // initialize our local result to an empty object before each test
                spyOn(brewService, 'getShops').and.callThrough(); // spy on the our service but allow it to continue to its implementation
            });

            it('should exist', function() {
                expect(brewService.getShops).toBeDefined();
            });

            it('should return the list of all shops', function () {
                // Declare the endpoint we expect our service to hit and provide it with our mocked return value
                $httpBackend.whenGET(API).respond(200, $q.when(shopsList));

                // validate the pre-service-call state
                expect(brewService.getShops).not.toHaveBeenCalled();
                expect(result).toEqual({});

                // make the call
                brewService.getShops()
                .then(function (res) {
                    result = res;
                });

                // Flush the pending HTTP requests
                $httpBackend.flush();

                // validate the service was called and returned the expected result
                expect(brewService.getShops).toHaveBeenCalled();
                expect(result).toEqual(shopsList);
            });
        });

        describe('getShop()', function () {
            var result;

            beforeEach(function () {
                result = {}; // initialize our local result to an empty object before each test
                spyOn(brewService, 'getShop').and.callThrough(); // spy on the our service but allow it to continue to its implementation
            });

            it('should return a shop when called with a valid key', function () {
                var search = '2';

                // Declare the endpoint we expect our service to hit and provide it with our mocked return value
                $httpBackend.whenGET(API + search).respond(200, $q.when(singleShop));

                expect(brewService.getShop).not.toHaveBeenCalled();
                expect(result).toEqual({});

                brewService.getShop(search)
                .then(function (res) {
                    result = res;
                });

                // Flush the pending HTTP requests
                $httpBackend.flush();

                expect(brewService.getShop).toHaveBeenCalledWith(search);
                expect(result.key).toEqual('2');
                expect(result.name).toEqual('Warsaw Coffee Co');
                expect(result.rating).toEqual(4);
            });

            xit('should return a 404 when called with an invalid key', function () {
                // need to decide what the actual behavior should be on 404..

                var search = '42';

                // update the status code and response object (reject instead of when/resolve)
                $httpBackend.whenGET(API + search).respond(404, $q.reject(RESPONSE_ERROR));

                expect(brewService.getShop).not.toHaveBeenCalled();
                expect(result).toEqual({});

                brewService.getShop(search)
                .catch(function (res) {
                    result = res;
                });
                $httpBackend.flush();

                expect(brewService.getShop).toHaveBeenCalledWith(search);
                expect(result.detail).toEqual('Not found.');
            });

        });

    });
})();
