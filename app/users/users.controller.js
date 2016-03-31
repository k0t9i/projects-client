'use strict';

define([], function () {
    function ret($scope, UserService) {
        var loaded = {};
        var users = [];

        this.getUsers = function() {
            if (!loaded['users']) {
                loaded['users'] = true;
                UserService.all().then(function(response) {
                    users = response.data;
                });
            }

            return users;
        }

        this.switchState = function(id) {
            UserService.switchState(id).then(function(response) {
                if (response.data.success) {
                    
                }
            });
        }
    }

    ret.$inject = ['$scope', 'UserService'];

    return ret;
});