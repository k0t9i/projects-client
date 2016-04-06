'use strict';

define([
    'angular',
    'angularRoute',
    'angularCookies',
    'app/user/user',
    'app/auth/auth'
], function (angular, angularRoute) {

    var app = angular.module('projects', ['ngRoute', 'projects.user', 'projects.auth']);

    app.config(['$routeProvider', '$httpProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/user/list'
        });
    }]);

    app.run(['$rootScope', function($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.page = current.page;
        });
    }]);

    app.directive('sort', function(){
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<a ng-transclude href="#"></a>',
            scope: {
                attr: '@',
                callback: '='
            },
            link: function(scope, element) {
                element.on('click', function(evt){
                    evt.preventDefault();
                    scope.asc = scope.attr.indexOf('-') === 0;
                    scope.attr = scope.asc ? scope.attr.substr(1) : ('-' + scope.attr);
                    scope.$apply(scope.callback);
                });
            }
        };
    });

    return app;
});