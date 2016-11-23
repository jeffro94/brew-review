(function () {
    'use strict';

    angular
        .module('app', [

            'ngMessages',
            'ui.router',
            'mm.foundation',
            'toastr',

            /* Features */
            'app.components',
            'app.main',
            'app.add',
            'app.edit'
        ]);
})();