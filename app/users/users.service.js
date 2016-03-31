'use strict';

define([], function () {
    function ret($http) {
        return {
            all: all,
            get: get,
            create: create,
            update: update,
            remove: remove,
            switchState: switchState
        };

        function all(params) {
            return $http.get('http://projects.dev/v1/users', {
                params: params
            });
        }

        function get(id, params) {
            return $http.get('http://projects.dev/v1/users/' + id, {
                params: params
            });
        }

        function create(user, params) {
            return $http.post('http://projects.dev/v1/users', user, {
                params: params
            });
        }

        function update(user, params) {
            return $http.put('http://projects.dev/v1/users', user, {
                params: params
            });
        }

        function remove(id, params) {
            return $http.delete('http://projects.dev/v1/users/' + id, {
                params: params
            });
        }

        function switchState(id) {
            return $http.get('http://projects.dev/v1/users/' + id + '/switch-state');
        }
    }

    ret.$inject = ['$http'];

    return ret;
});