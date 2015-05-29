(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("appraisalResource", ["$resource", "appSettings","currentUser", appraisalResource]);

    function appraisalResource($resource, appSettings, currentUser) {

        return $resource(appSettings.serverPath + "/api/appraisals/:id", null, {

            'update': {
                method: 'PUT', isArray: false,
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            },
            'get': {
                method: 'GET', isArray: false,
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            },
            'save': {
                method: 'POST', isArray: false,
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            },
            'query': {
                method: 'GET', isArray: true,
                headers: { 'Authorization': 'Bearer ' + currentUser.getProfile().token }
            }

        });

    };

}());