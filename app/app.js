'use strict';

define([
    'angular',
    'angularRoute',
    'app/service/unauthorized-http-interceptor.service',
    'app/config',
    'app/user/user'
], function (angular, angularRoute, UnauthorizedHttpInterceptor, AppConfig) {

    var app = angular.module('projects', ['ngRoute', 'projects.user']);

    app.factory('UnauthorizedHttpInterceptor', UnauthorizedHttpInterceptor);
    app.factory('AppConfig', AppConfig);

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('UnauthorizedHttpInterceptor');

        $routeProvider.when('/login', {
            templateUrl: 'app/auth/login.html'
        }).otherwise({
            redirectTo: '/user/list'
        });
    }]);

    app.run(['$http', function($http){
        $http.defaults.headers.common.Authorization = 'Bearer 1';
    }]);

    return app;
});