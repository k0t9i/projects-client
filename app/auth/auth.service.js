'use strict';

define([], function () {
    function ret($q, $cookies, $http, AppConfig) {
        return {
            login: login,
            logout: logout,
            localLogout: localLogout,
            setAuthorizationHeader: setAuthorizationHeader
        };

        function login(login, password) {
            return $http.post(AppConfig.apiRoot + '/access-tokens', {
                login: login,
                password: password
            }).success(function (response) {
                $cookies.putObject('authToken', response);
                setAuthorizationHeader();
            });
        }

        function logout() {
            var authToken = $cookies.getObject('authToken');
            var promise = null;

            if (authToken) {
                promise = $http.delete(AppConfig.apiRoot + '/access-tokens/' + authToken);
            }

            return $q.when(promise).finally(function () {
                $cookies.remove('authToken');
                setAuthorizationHeader();
            });
        }

        function setAuthorizationHeader() {
            var authToken = $cookies.getObject('authToken');

            if (authToken) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + authToken.token;
            } else {
                $http.defaults.headers.common.Authorization = 'Bearer';
            }

            return !!authToken;
        }
    }

    ret.$inject = ['$q', '$cookies', '$http', 'AppConfig'];

    return ret;
});