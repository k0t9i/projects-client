'use strict';

define([], function () {
    function ret($http, AppConfig) {
        return {
            all: all,
            get: get,
            create: create,
            update: update,
            remove: remove,
            switchState: switchState
        };

        function all(params) {
            return $http.get(AppConfig.apiRoot + '/users', {
                params: params
            });
        }

        function get(id, params) {
            return $http.get(AppConfig.apiRoot + '/users/' + id, {
                params: params
            });
        }

        function create(user, params) {
            return $http.post(AppConfig.apiRoot + '/users', user, {
                params: params
            });
        }

        function update(user, params) {
            return $http.put(AppConfig.apiRoot + '/users', user, {
                params: params
            });
        }

        function remove(id, params) {
            return $http.delete(AppConfig.apiRoot + '/users/' + id, {
                params: params
            });
        }

        function switchState(id) {
            return $http.get(AppConfig.apiRoot + '/users/' + id + '/switch-state');
        }
    }

    ret.$inject = ['$http', 'AppConfig'];

    return ret;
});