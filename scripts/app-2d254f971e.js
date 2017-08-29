!function(){"use strict";angular.module("app.components",["app"])}(),function(){"use strict";function e(){function e(){}var s={restrict:"E",templateUrl:"app/components/navbar/navbar.html",controller:e,controllerAs:"vm",bindToController:!0};return s}angular.module("app.components").directive("navbar",e)}(),function(){"use strict";angular.module("app.main",["app"])}(),function(){"use strict";function e(e){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"})}e.$inject=["$stateProvider"],angular.module("app.main").config(e)}(),function(){"use strict";function e(e,s){var i=this;i.isRatingReadonly=!0,i.isPageLoading=!0,s(function(){e.getShops().then(function(e){i.shops=e,i.isPageLoading=!1})},500)}e.$inject=["brewService","$timeout"],angular.module("app.main").controller("MainController",e)}(),function(){"use strict";angular.module("app.edit",["app"])}(),function(){"use strict";function e(e){e.state("edit",{url:"/edit/{shopId}",controller:"EditController",controllerAs:"vm",templateUrl:"app/edit/edit.html",resolve:{shop:["brewService","$stateParams",function(e,s){return e.getShop(s.shopId)}]}})}e.$inject=["$stateProvider"],angular.module("app.edit").config(e)}(),function(){"use strict";function e(e,s,i,a,n,t){var r=this;r.shop=i,r.submitForm=function(e){e&&(r.loadingPromise=t(function(){s.updateShop(r.shop).then(function(){n.success("Shop successfully updated!")},function(e){a.error("Error updating shop.\n"+angular.toJson(e.data,!0))})},2e3))},r["delete"]=function(){r.loadingPromise=s.deleteShop(r.shop.key).then(function(){n.success("Shop successfully deleted!")},function(e){a.error("Error deleting shop.\n"+angular.toJson(e.data,!0))})}}e.$inject=["$scope","brewService","shop","$log","toastr","$timeout"],angular.module("app.edit").controller("EditController",e)}(),function(){"use strict";angular.module("app.add",["app"])}(),function(){"use strict";function e(e){e.state("add",{url:"/add",controller:"AddController",controllerAs:"vm",templateUrl:"app/add/add.html"})}e.$inject=["$stateProvider"],angular.module("app.add").config(e)}(),function(){"use strict";function e(e,s,i,a){var n=this;n.shop={},n.submitForm=function(e){e&&s.addShop(n.shop).then(function(){a.success("Shop successfully added!")},function(e){i.error("Oh no, there was an error adding the shop.\n"+angular.toJson(e.data,!0))})}}e.$inject=["$scope","brewService","$log","toastr"],angular.module("app.add").controller("AddController",e)}(),function(){"use strict";angular.module("app",["ngMessages","ui.router","mm.foundation","toastr","angularPromiseButtons","angular-spinkit","app.components","app.main","app.add","app.edit"])}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,s){s.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app")}(),function(){"use strict";function e(e,s){e.debugEnabled(!0),s.allowHtml=!0,s.timeOut=3e3,s.positionClass="toast-top-right"}e.$inject=["$logProvider","toastrConfig"],angular.module("app").config(e)}(),function(){"use strict";function e(e,s){function i(){function i(e){return e.data}function a(s){e.error("XHR Failed for getShops.\n"+angular.toJson(s.data,!0))}return s.get("https://brewapi.azurewebsites.net/api/coffeeshop/").then(i)["catch"](a)}function a(i){function a(e){return e.data}function n(s){e.error("XHR Failed for getShop.\n"+angular.toJson(s.data,!0))}return s.get("https://brewapi.azurewebsites.net/api/coffeeshop/"+i).then(a)["catch"](n)}function n(i){function a(){return"yes"}function n(s){e.error("XHR Failed for updateShop.\n"+angular.toJson(s.data,!0))}var t={method:"PATCH",url:"https://brewapi.azurewebsites.net/api/coffeeshop/"+i.key,headers:{"Content-Type":"application/json"},data:angular.toJson(i,!1)};return s(t).then(a)["catch"](n)}function t(i){function a(){return"yes"}function n(s){e.error("XHR Failed for addShop.\n"+angular.toJson(s.data,!0))}var t={method:"POST",url:"https://brewapi.azurewebsites.net/api/coffeeshop/",headers:{"Content-Type":"application/json"},data:angular.toJson(i,!1)};return s(t).then(a)["catch"](n)}function r(i){function a(){return"yes"}function n(s){e.error("XHR Failed for deleteShop.\n"+angular.toJson(s.data,!0))}var t={method:"DELETE",url:"https://brewapi.azurewebsites.net/api/coffeeshop/"+i};return s(t).then(a)["catch"](n)}var d={getShops:i,getShop:a,updateShop:n,addShop:t,deleteShop:r};return d}e.$inject=["$log","$http"],angular.module("app").factory("brewService",e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/add/add.html",'<h1 class=brew-title>Add Shop</h1><form name=addForm ng-submit=vm.submitForm(addForm.$valid) novalidate><div class=row><div class="medium-3 columns"><label for=name class=right ng-class="{ \'is-invalid-label\': addForm.name.$invalid && addForm.$submitted }">Name</label></div><div class="medium-9 columns"><input type=text id=name name=name ng-model=vm.shop.name required maxlength=80 ng-class="{ \'is-invalid-input\': addForm.name.$invalid && addForm.$submitted }"><div class=messages ng-messages=addForm.name.$error ng-show="addForm.name.$invalid && addForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span></div></div></div><div class=row><div class="medium-3 columns"><label for=address class=right ng-class="{ \'is-invalid-label\': addForm.address.$invalid && addForm.$submitted }">Address</label></div><div class="medium-9 columns"><input type=text id=address name=address ng-model=vm.shop.address required maxlength=255 ng-class="{ \'is-invalid-input\': addForm.address.$invalid && addForm.$submitted }"><div class=messages ng-messages=addForm.address.$error ng-show="addForm.address.$invalid && addForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span></div></div></div><div class=row><div class="medium-3 columns"><label for=price class=right ng-class="{ \'is-invalid-label\': addForm.price.$invalid && addForm.$submitted }">Coffee Price</label></div><div class="medium-9 columns"><input type=number step=0.01 min=0 id=price name=price ng-model=vm.shop.mediumCoffeePrice required maxlength=255 ng-class="{ \'is-invalid-input\': addForm.price.$invalid && addForm.$submitted }"><div class=messages ng-messages=addForm.price.$error ng-show="addForm.price.$invalid && addForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span> <span class="message form-error is-visible" ng-message=min>Price amount cannot be negative</span></div></div></div><div class=row><div class="medium-3 columns"><label for=rating class=right ng-class="{ \'is-invalid-label\': addForm.rating.$invalid && addForm.$submitted }">Rating</label></div><div class="medium-9 columns"><input type=number min=1 max=5 id=rating name=rating ng-model=vm.shop.rating required ng-class="{ \'is-invalid-input\': addForm.rating.$invalid && addForm.$submitted }"><div class=messages ng-messages=addForm.rating.$error ng-show="addForm.rating.$invalid && addForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span> <span class="message form-error is-visible" ng-message=min>Rating must be between 1 and 5</span> <span class="message form-error is-visible" ng-message=max>Rating must be between 1 and 5</span></div></div></div><div class="row form-actions"><div class="small-12 columns"><input type=submit value=Submit class=button></div></div></form>'),e.put("app/edit/edit.html",'<h1 class=brew-title>Edit Shop</h1><form name=editForm ng-submit=vm.submitForm(editForm.$valid) novalidate><div class=row><div class="medium-3 columns"><label for=name class=right ng-class="{ \'is-invalid-label\': editForm.name.$invalid && editForm.$submitted }">Name</label></div><div class="medium-9 columns"><input type=text id=name name=name ng-model=vm.shop.name required maxlength=80 ng-class="{ \'is-invalid-input\': editForm.name.$invalid && editForm.$submitted }"><div class=messages ng-messages=editForm.name.$error ng-show="editForm.name.$invalid && editForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span></div></div></div><div class=row><div class="medium-3 columns"><label for=address class=right ng-class="{ \'is-invalid-label\': editForm.address.$invalid && editForm.$submitted }">Address</label></div><div class="medium-9 columns"><input type=text id=address name=address ng-model=vm.shop.address required maxlength=255 ng-class="{ \'is-invalid-input\': editForm.address.$invalid && editForm.$submitted }"><div class=messages ng-messages=editForm.address.$error ng-show="editForm.address.$invalid && editForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span></div></div></div><div class=row><div class="medium-3 columns"><label for=price class=right ng-class="{ \'is-invalid-label\': editForm.price.$invalid && editForm.$submitted }">Coffee Price</label></div><div class="medium-9 columns"><input type=number step=0.01 min=0 id=price name=price ng-model=vm.shop.mediumCoffeePrice required maxlength=255 ng-class="{ \'is-invalid-input\': editForm.price.$invalid && editForm.$submitted }"><div class=messages ng-messages=editForm.price.$error ng-show="editForm.price.$invalid && editForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span> <span class="message form-error is-visible" ng-message=min>Price amount cannot be negative</span></div></div></div><div class=row><div class="medium-3 columns"><label for=rating class=right ng-class="{ \'is-invalid-label\': editForm.rating.$invalid && editForm.$submitted }">Rating</label></div><div class="medium-9 columns"><input type=number min=1 max=5 id=rating name=rating ng-model=vm.shop.rating required ng-class="{ \'is-invalid-input\': editForm.rating.$invalid && editForm.$submitted }"><div class=messages ng-messages=editForm.rating.$error ng-show="editForm.rating.$invalid && editForm.$submitted"><span class="message form-error is-visible" ng-message=required>Required</span> <span class="message form-error is-visible" ng-message=min>Rating must be between 1 and 5</span> <span class="message form-error is-visible" ng-message=max>Rating must be between 1 and 5</span></div></div></div><div class="row form-actions"><div class="small-12 columns"><div><button type=submit class=button promise-btn=vm.loadingPromise>Submit</button></div><div><button type=button class=button promise-btn=vm.loadingPromise ng-click=vm.delete()>Delete this shop</button></div></div></div></form>'),e.put("app/main/main.html",'<h1 class=brew-title>All Shops</h1><div class=row><div class="medium-7 small-8 columns"><strong>Name</strong></div><div class="medium-2 show-for-medium columns"><strong>Price</strong></div><div class="medium-3 small-4 columns"><strong>Rating</strong></div></div><div ng-show=vm.isPageLoading><wave-spinner></wave-spinner></div><div ng-show=!vm.isPageLoading><div><div class=row ng-repeat="shop in vm.shops"><div class="medium-7 small-8 columns"><a ui-sref="edit({ shopId: shop.key })">{{ shop.name }}</a></div><div class="medium-2 show-for-medium columns">{{ shop.mediumCoffeePrice | currency }}</div><div class="medium-3 small-4 columns"><rating value=shop.rating max=5 readonly></rating></div></div></div><div class="row main-actions text-center"><div class="small-12 columns"><a ui-sref=add>Add a Shop</a></div></div></div>'),e.put("app/components/navbar/navbar.html","<div class=top-bar><div class=top-bar-left><div class=menu-text><a ui-sref=home>Brew Review</a></div></div></div>")}]);
//# sourceMappingURL=../maps/scripts/app-2d254f971e.js.map
