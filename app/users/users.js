'use strict';

define([
    'angular',
    'app/users/users.service',
    'app/users/users.controller'
], function (angular, UserService, UserController) {

    var app = angular.module('projects.users', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'app/users/list.html',
            controller: 'UserController',
            controllerAs: 'UserCtrl'
        });
    }]);

    app.factory('UserService', UserService);
    app.controller('UserController', UserController);

    return app;
});