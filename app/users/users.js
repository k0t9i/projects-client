'use strict';

define([
    'angular',
    'app/users/users.service',
    'app/users/users.controller',
    'app/config'
], function (angular, UserService, UserController, AppConfig) {
    var app = angular.module('projects.users', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'app/users/list.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
        });
    }]);

    app.factory('UserService', UserService);
    app.factory('AppConfig', AppConfig);
    app.controller('UserController', UserController);

    return app;
});