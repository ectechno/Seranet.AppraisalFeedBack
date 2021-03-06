﻿(function () {

    angular
        .module("appraisalFeedBack")
        .controller("AppraisalEditCtrl", ["appraisal", AppraisalEditCtrl]);

    function AppraisalEditCtrl(appraisal) {

        var vm = this;
        vm.appraisal = {};
        vm.appraisalTypes = [
        { name: 'Year End' },
        { name: 'Mid Year' }];
        vm.appraisal = appraisal;
        vm.selectedItem = { name: vm.appraisal.appraisalType };
        vm.originalAppraisal = angular.copy(appraisal);

        if (vm.appraisal && vm.appraisal.id) {
            vm.title = "Edit " + vm.appraisal.projectName + " Appraisal"
         } else {
            vm.title = "New Appraisal"
         }

        vm.submit = function () {

            if (vm.appraisal.id != 0) {               
                vm.appraisal.$update({ id: vm.appraisal.id }, function (data) {
                    vm.message = "....Save Complete";
                });
            }
            else {
                vm.appraisal.$save(function (data) {
                    vm.originalAppraisal = angular.copy(data);
                    vm.message = "....Save Complete";
                });
            }

        };

        vm.cancel = function (editForm) {

            editForm.$setPristine();
            vm.appraisal = angular.copy(vm.originalAppraisal);

        };
        vm.changeType = function (item) {
            vm.appraisal.appraisalType = item.name;
        };

    };

}());