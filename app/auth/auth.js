'use strict';

define([
    'angular',
    'app/auth/auth.controller',
    'app/auth/auth.service',
    'app/auth/unauthorized-http-interceptor.service',
    'app/config',
    'app/user/user.service',
], function (angular, AuthController, AuthService, UnauthorizedHttpInterceptor, AppConfig) {
    var app = angular.module('projects.auth', ['ngRoute', 'ngCookies']);

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('UnauthorizedHttpInterceptor');

        $routeProvider.when('/login', {
            controller: 'AuthController',
            templateUrl: 'app/auth/login.html',
            controllerAs: 'AuthCtrl'
        }).when('/logout', {
            controller: 'AuthController'
        });
    }]);

    app.run(['$rootScope', '$http', '$location', 'AuthService', 'UserService', function ($scope, $http, $location, AuthService, UserService) {
        if (AuthService.setAuthorizationHeader()) {
            UserService.self().success(function (response) {
                $scope.credentials = response;
            });
        }

        $scope.$on('$routeChangeStart', function (evt, next) {
            if (next.originalPath == '/logout') {
                AuthService.logout().finally(function(){
                    $location.path('/login');
                });
            }
        });
    }]);

    app.factory('AppConfig', AppConfig);
    app.factory('AuthService', AuthService);
    app.factory('UnauthorizedHttpInterceptor', UnauthorizedHttpInterceptor);
    app.factory('AuthMediatorService', function(){

    });
    app.controller('AuthController', AuthController);

    return app;
});