(function(angular) {


    var loginModule = angular.module('loginModule', [])
    loginModule.component('login', {
        templateUrl: "login/login.component.html",
        controller: FormController,
        controllerAs: 'fc'
    });

    function FormController( userLoginService ) {

      this.dashboardLink = function(){
        window.location = "#/dashboard";
      }


      this.loggedInUser = userLoginService.loggedInUser;

        this.submit = function (form) {
          console.log("yeahbitch")
          if (form.$valid) {
            console.log(form)
            console.log(form.uPassword.$$lastCommittedViewValue);
            console.log(form.uEmail.$$lastCommittedViewValue);
            this.formResults = {
                "password": form.uPassword.$$lastCommittedViewValue
              , "email":  form.uEmail.$$lastCommittedViewValue
            }
            console.log(this.formResults);
            userLoginService.logInUser( this.formResults ).then ( (data) => {
            this.loggedInUser = userLoginService.loggedInUser;
            });
            this.loggedInUser = userLoginService.loggedInUser;
          }
        };
    }





})(window.angular);
