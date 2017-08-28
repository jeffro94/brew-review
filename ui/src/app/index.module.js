(function () {
    'use strict';

    angular
        .module('app', [

            'ngMessages',
            'ui.router',
            'mm.foundation',
            'toastr',
            'angularPromiseButtons',
            'angular-spinkit',

            /* Features */
            'app.components',
            'app.main',
            'app.add',
            'app.edit'
        ]);
})();