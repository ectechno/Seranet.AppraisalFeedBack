(function () {
    "use strict";

    angular
        .module("appraisalFeedBack")
        .controller("MainCtrl",["userAccount","currentUser", MainCtrl]);

    function MainCtrl(userAccount,currentUser) {
        var vm = this;
        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        };
        vm.message = '';
        vm.userData = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''

        };

        vm.login = function () {
            vm.userData.grant_type = "password";
            vm.userData.userName = vm.userData.email;
            userAccount.loginUser.login(vm.userData, function (data) {
                vm.userData.password = "";
                vm.message = "";
                currentUser.setProfile(vm.userData.userName, data.access_token);

            }, function (response) {
                vm.userData.password = "";

                vm.message = response.statusText + "\r\n";
                if (response.data.exeptionMessage)
                    vm.message += response.data.exeptionMessage;

                if (response.data.error) 
                        vm.message += response.data.error;
            });
            

        };

        vm.register = function () {
            vm.userData.confirmPassword = vm.userData.password;

            userAccount.registration.register(vm.userData, function (data) {

                vm.userData.confirmPassword = "";
                vm.login();

            }, function (response) {
                vm.userData.confirmPassword = "";
                vm.message = response.statusText + "\r\n";
                if (response.data.exeptionMessage)
                    vm.message += response.data.exeptionMessage;

                if (response.data.modelState) {
                    for (var key in response.data.modelState) {
                        vm.message += response.data.modelState[key] + "\r\n";
                    };
                };

            });

        };

    };


}());