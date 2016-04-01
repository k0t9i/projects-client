'use strict';

define([], function () {
    function ret($q, $location, AppConfig) {
        var canceller = $q.defer();
        return {
            request: function (config) {
                // Only for api requests
                if (config.url.indexOf(AppConfig.apiRoot) === 0) {
                    config.timeout = canceller.promise;
                }
                return config;
            },
            responseError: function (response) {
                if (response.status === 401) {
                    canceller.resolve('Unauthorized');
                    $location.path('/logout');
                    canceller = $q.defer();
                }
                return $q.reject(response);
            }
        };
    }

    ret.$inject = ['$q', '$location', 'AppConfig'];

    return ret;
});