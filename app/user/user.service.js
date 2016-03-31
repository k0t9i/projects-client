'use strict';

define([], function () {
    function ret($http, AppConfig) {
        return {
            all: all,
            get: get,
            create: create,
            update: update,
            change: change,
            remove: remove,
            switchState: switchState,
            labels: labels
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
            return $http.put(AppConfig.apiRoot + '/users/' + user.id, user, {
                params: params
            });
        }

        function change(user, params) {
            if (user.id !== undefined) {
                return update(user, params);
            }
            return create(user, params);
        }

        function remove(id, params) {
            return $http.delete(AppConfig.apiRoot + '/users/' + id, {
                params: params
            });
        }

        function switchState(id) {
            return $http.get(AppConfig.apiRoot + '/users/' + id + '/switch-state');
        }

        function labels() {
            return $http.get(AppConfig.apiRoot + '/users/self', {
                params: {
                    'fields': false,
                    'expand': 'labels'
                }
            });
        }
    }

    ret.$inject = ['$http', 'AppConfig'];

    return ret;
});