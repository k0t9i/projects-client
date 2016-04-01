'use strict';

define([], function () {
    function ret($http, AppConfig) {
        return {
            all: all,
            get: get,
            change: change,
            remove: remove,
            switchState: switchState,
            labels: labels,
            genders: genders,
            self: self
        };

        function self(params) {
            return $http.get(AppConfig.apiRoot + '/users/self', {
                params: params
            });
        }

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

        function change(user, params) {
            var method = 'post';
            var url = AppConfig.apiRoot + '/users';
            if (user.id !== undefined) {
                method = 'put';
                url += '/' + user.id;
            }
            return $http({
                method: method,
                url: url,
                data: user,
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

        function labels() {
            return $http.get(AppConfig.apiRoot + '/users/self', {
                params: {
                    'fields': false,
                    'expand': 'labels'
                }
            });
        }

        function genders(params) {
            return $http.get(AppConfig.apiRoot + '/genders', {
                params: params
            });
        }
    }

    ret.$inject = ['$http', 'AppConfig'];

    return ret;
});