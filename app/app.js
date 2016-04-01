'use strict';

define([
    'angular',
    'angularRoute',
    'angularCookies',
    'app/user/user',
    'app/auth/auth'
], function (angular, angularRoute) {

    var app = angular.module('projects', ['ngRoute', 'projects.user', 'projects.auth']);

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/user/list'
        });
    }]);

    app.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.page = current.page;
        });
    }]);

    return app;
});