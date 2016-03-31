'use strict';

define([
    'angular',
    'app/user-group/user-group.service',
    'app/user-group/user-group.controller',
    'app/config'
], function (angular, UserGroupService, UserGroupController, AppConfig) {
    var app = angular.module('projects.user-group', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user-group/list', {
            templateUrl: 'app/user-group/list.html',
            controller: 'UserGroupController',
            controllerAs: 'UserGroupCtrl'
        }).when('/user-group/view/:id', {
            templateUrl: 'app/user-group/view.html',
            controller: 'UserGroupController',
            controllerAs: 'UserGroupCtrl'
        });
    }]);

    app.factory('UserGroupService', UserGroupService);
    app.factory('AppConfig', AppConfig);
    app.controller('UserGroupController', UserGroupController);

    return app;
});