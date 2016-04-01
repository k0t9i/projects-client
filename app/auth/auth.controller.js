'use strict';

define([
    'jquery'
], function () {
    function ret($location, AuthService) {

        this.login = function() {
            AuthService.login(this.username, this.password).then(function(response){
                $location.path('/');
            });
        };
    }

    ret.$inject = ['$location', 'AuthService'];

    return ret;
});