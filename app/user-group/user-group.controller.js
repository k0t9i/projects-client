'use strict';

define([], function () {
    function ret(UserGroupService, $routeParams) {
        var loaded = {};
        var groups = [];
        var _this = this;

        this.fetch = function() {
            if ($routeParams.id !== undefined) {
                UserGroupService.get($routeParams.id).then(function(response) {
                    _this.group = response.data;
                });
            } else {
                _this.group = {};
            }
        }

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

    ret.$inject = ['UserGroupService', '$routeParams'];

    return ret;
});