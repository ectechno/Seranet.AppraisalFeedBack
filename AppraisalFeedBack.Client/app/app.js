(function () {

    "use strict";

    var app = angular.module("appraisalFeedBack",
        ["common.services", "ui.router", "ui.mask"]);

    app.config(["$stateProvider","$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/appraisals");

            $stateProvider
                .state("appraisalList", {
                    url: "/appraisals",
                    templateUrl: "app/appraisals/appraisalListView.html",
                    controller: "AppraisalListCtrl as vm"
                })
                .state("appraisalEdit", {
                    url: "/appraisals/Edit/:id",
                    templateUrl: "app/appraisals/appraisalEditView.html",
                    controller: "AppraisalEditCtrl as vm",
                    resolve: {
                        appraisalResource: "appraisalResource",
                        appraisal: function (appraisalResource, $stateParams) {
                                        var id = $stateParams.id;
                                        return appraisalResource.get({ id: id }).$promise;
                                    }
                    }
                })

        }]
    );


}());