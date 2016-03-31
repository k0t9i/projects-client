'use strict';

define([
    'angular',
    'angularRoute',
    'app/user/user'
], function (angular, angularRoute) {

    var app = angular.module('projects', ['ngRoute', 'projects.user']);

    app.config(['$routeProvider', function ($routeProvider) {

    }]);

    app.run(['$http', function($http){
        $http.defaults.headers.common.Authorization = 'Bearer 1';
    }]);

    return app;
});