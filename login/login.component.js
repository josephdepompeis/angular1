(function(angular) {


    var loginModule = angular.module('loginModule', [])
    loginModule.component('login', {
        templateUrl: "login/login.component.html",
        controller: FormController,
        controllerAs: 'fc'
    });


    function FormController() {
        var vm = this;

        vm.submit = function (form) {
          console.log("yeahbitch")
          if (form.$valid) {
            console.log("ssyeahbitch")
            console.log(form.uEmail)
          }
        };
    }





})(window.angular);
