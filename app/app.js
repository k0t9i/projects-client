'use strict';

define([
    'angular',
    'angularRoute',
    'app/users/users'
], function (angular, angularRoute) {

    var app = angular.module('projects', ['ngRoute', 'projects.users']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/users'
        })
    }]);

    app.run(['$http', function($http){
        $http.defaults.headers.common.Authorization = 'Bearer 1';
    }]);

    return app;
});