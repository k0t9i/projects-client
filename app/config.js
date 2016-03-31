'use strict';

define([
    'app/config-local',
    'jquery'
], function (localConfig) {

    function ret() {
        var config = {
            apiRoot: 'http://projects.dev/v1'
        };

        return jQuery.extend(config, localConfig());
    }

    return ret;
});