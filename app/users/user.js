'use strict';

define([
    'angular',
    'app/user/user.service',
    'app/user/user.controller',
    'app/config'
], function (angular, UserService, UserController, AppConfig) {
    var app = angular.module('projects.user', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user', {
            templateUrl: 'app/user/list.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
        });
    }]);

    app.factory('UserService', UserService);
    app.factory('AppConfig', AppConfig);
    app.controller('UserController', UserController);

    return app;
});