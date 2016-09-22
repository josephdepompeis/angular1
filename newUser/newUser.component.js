(function(angular) {


    var newUserModule = angular.module('newUserModule', [])
    newUserModule.component('newUser', {
        templateUrl: "newUser/newUser.component.html",
        controller: FormController,
        controllerAs: 'fc'
    });

    function FormController( createUserService ) {

        this.submit = function (form) {
          console.log("yeahbitch")
          this.createdUser = createUserService.createdUser;
          if (form.$valid) {
            console.log(form)
            // console.log(form.uFirstName.$$lastCommittedViewValue);
            // console.log(form.uPassword.$$lastCommittedViewValue);
            // console.log(form.uEmail.$$lastCommittedViewValue);
            this.formResults = {user: {
                "name": form.uFirstName.$$lastCommittedViewValue
              , "password": form.uPassword.$$lastCommittedViewValue
              , "email":  form.uEmail.$$lastCommittedViewValue
            }}
            console.log(this.formResults);
            createUserService.createUser( this.formResults ).then ( (data) => {
              this.createdUser = createUserService.createdUser;
            });
            this.createdUser = createUserService.createdUser;
          }
        };
    }






})(window.angular);
