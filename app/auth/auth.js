'use strict';

define([
    'angular',
    'app/auth/auth.controller',
    'app/auth/unauthorized-http-interceptor.service.js',
    'app/config'
], function (angular, AuthController, UnauthorizedHttpInterceptor, AppConfig) {
    var app = angular.module('projects.auth', ['ngRoute']);

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('UnauthorizedHttpInterceptor');

        $routeProvider.when('/login', {
            templateUrl: 'app/auth/login.html'
        });
    }]);

    app.factory('AppConfig', AppConfig);
    app.factory('UnauthorizedHttpInterceptor', UnauthorizedHttpInterceptor);
    app.controller('AuthController', AuthController);

    return app;
});