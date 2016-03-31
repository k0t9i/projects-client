'use strict';

define([], function () {
    function ret($http, AppConfig) {
        return {
            all: all,
            get: get
        };

        function all(params) {
            return $http.get(AppConfig.apiRoot + '/user-groups', {
                params: params
            });
        }

        function get(id, params) {
            return $http.get(AppConfig.apiRoot + '/user-groups/' + id, {
                params: params
            });
        }
    }
    
    ret.$inject = ['$http', 'AppConfig'];

    return ret;
});