(function () {
    "use strict";

    angular
        .module("appraisalFeedBack")
        .controller("AppraisalListCtrl",["appraisalResource", AppraisalListCtrl]);

    function AppraisalListCtrl(appraisalResource) {

        var vm = this;
        
        appraisalResource.query(function (data) {

            vm.appraisals = data;
        });

    };
}());