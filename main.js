'use strict';

require.config({
    paths: {
        angular: 'bower/angular/angular.min',
        angularRoute: 'bower/angular-route/angular-route.min',
        angularCookies: 'bower/angular-cookies/angular-cookies.min',
        jquery: 'bower/jquery/dist/jquery.min'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'angularCookies': ['angular']
    }
});

require([
        'angular',
        'app/app'
    ], function (angular, app) {
        angular.element().ready(function () {
            angular.bootstrap(document, ['projects']);
        });
    }
);