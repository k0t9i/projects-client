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
            template: '<a href="#"><span ng-transclude></span> <i class="fa fa-fw fa-sort" ng-class="{\'fa-sort-asc\': sort == attr, \'fa-sort-desc\': sort == \'-\' + attr}"></i></a>',
            scope: {
                attr: '@'
            },
            link: function(scope, element) {
                element.on('click', function(evt){
                    evt.preventDefault();
                    var sort = scope.$parent.params['sort'] !== undefined ? scope.$parent.params['sort'] : '';
                    if (sort) {
                        var sortAttr = sort.indexOf('-') === 0 ? sort.substr(1) : sort;
                        if (sortAttr != scope.attr) {
                            sort = '';
                        }
                    }
                    scope.$parent.params['sort'] = sort.indexOf('-') === 0 ? scope.attr : ('-' + scope.attr);
                    scope.$parent.$digest();
                });

                scope.$watch(function(){
                    return scope.$parent.params['sort'];
                }, function(){
                    scope.sort = scope.$parent.params['sort'];
                });
            }
        };
    });

    return app;
});