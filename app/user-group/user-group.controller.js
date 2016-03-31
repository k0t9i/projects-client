'use strict';

define([], function () {
    function ret(UserGroupService) {
        var loaded = {};
        var groups = [];

        this.getAll = function() {
            if (!loaded['groups']) {
                loaded['groups'] = true;
                UserGroupService.all().then(function(response) {
                    groups = response.data;
                });
            }

            return groups;
        }
    }

    ret.$inject = ['UserGroupService'];

    return ret;
});