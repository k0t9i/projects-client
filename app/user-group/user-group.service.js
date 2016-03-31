'use strict';

define([], function () {
    function ret($http, AppConfig) {
        return {
            all: all
        };

        function all(params) {
            return $http.get(AppConfig.apiRoot + '/user-groups', {
                params: params
            });
        }
    }
    
    ret.$inject = ['$http', 'AppConfig'];

    return ret;
});