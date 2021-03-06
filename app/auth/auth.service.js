'use strict';

define([], function () {
    function ret($q, $cookies, $http, $scope, AppConfig, UserService) {
        return {
            login: login,
            logout: logout,
            resolveCredentials: resolveCredentials
        };

        function login(login, password) {
            return $http.post(AppConfig.apiRoot + '/access-tokens', {
                login: login,
                password: password
            }).success(function (response) {
                $cookies.putObject(AppConfig.authTokenParam, response);
                resolveCredentials();
            });
        }

        function logout() {
            var authToken = $cookies.getObject(AppConfig.authTokenParam);
            var promise = null;

            if (authToken) {
                promise = $http.delete(AppConfig.apiRoot + '/access-tokens/' + authToken.id);
            }

            return $q.when(promise).finally(function () {
                $cookies.remove(AppConfig.authTokenParam);
                resolveCredentials();
            });
        }

        function resolveCredentials() {
            if (setAuthorizationHeader()) {
                UserService.self().success(function (response) {
                    $scope.credentials = response;
                });
            } else {
                $scope.credentials = undefined;
            }
        }

        function setAuthorizationHeader() {
            var authToken = $cookies.getObject(AppConfig.authTokenParam);

            if (authToken) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + authToken.token;
            } else {
                $http.defaults.headers.common.Authorization = 'Bearer';
            }

            return !!authToken;
        }
    }

    ret.$inject = ['$q', '$cookies', '$http', '$rootScope', 'AppConfig', 'UserService'];

    return ret;
});