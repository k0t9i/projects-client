'use strict';

define([], function () {
    function ret($scope, $location, $routeParams, UserService) {
        this.errors = {};
        var _this = this;
        var loaded = {};
        var users = [];
        var labels = {};
        var genders = [];

        if ($routeParams.id !== undefined) {
            UserService.get($routeParams.id, {
                'expand': 'userGroups'
            }).then(function(response) {
                _this.user = response.data;
            });
        } else {
            _this.user = {
                userGroups: [],
                gender: {}
            };
        }

        this.getAll = function() {
            if (!loaded['users']) {
                loaded['users'] = true;
                UserService.all().then(function(response) {
                    users = response.data;
                });
            }

            return users;
        }

        this.change = function() {
            if (this.user) {
                this.user.groups = this.user.userGroups.map(function(item){
                    return item.id;
                });
                this.user.idGender = this.user.gender.id;

                UserService.change(this.user).then(function(response){
                    $location.path('/user/list');
                }, function(response){
                    _this.errors = {};
                    angular.forEach(response.data, function(val){
                        _this.errors[val.field] = val.message;
                    });
                });
            }
        }

        this.switchState = function(id) {
            UserService.switchState(id).then(function(response) {
                if (response.data.success) {
                    loaded['users'] = false;
                }
            });
        }

        this.getLabels = function() {
            if (!loaded['labels']) {
                loaded['labels'] = true;
                UserService.labels().then(function(response) {
                    labels = response.data.labels;
                });
            }

            return labels;
        }
        
        this.getGenders = function() {
            if (!loaded['genders']) {
                loaded['genders'] = true;
                UserService.genders().then(function(response) {
                    genders = response.data;
                });
            }

            return genders;
        }
    }

    ret.$inject = ['$scope', '$location', '$routeParams', 'UserService'];

    return ret;
});