'use strict';

define([
    'angular',
    'app/user/user.service',
    'app/user/user.controller',
    'app/config',
    'app/user-group/user-group'
], function (angular, UserService, UserController, AppConfig) {
    var app = angular.module('projects.user', ['ngRoute', 'projects.user-group']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user/list', {
            templateUrl: 'app/user/list.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
        }).when('/user/change/:id?', {
            templateUrl: 'app/user/change.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
        });
    }]);

    app.factory('UserService', UserService);
    app.factory('AppConfig', AppConfig);
    app.controller('UserController', UserController);

    return app;
});