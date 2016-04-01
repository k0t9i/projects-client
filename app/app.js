'use strict';

define([
    'angular',
    'angularRoute',
    'app/user/user',
    'app/auth/auth'
], function (angular, angularRoute) {

    var app = angular.module('projects', ['ngRoute', 'projects.user', 'projects.auth']);

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/user/list'
        });
    }]);

    app.run(['$http', function($http){
        $http.defaults.headers.common.Authorization = 'Bearer 1';
    }]);

    return app;
});