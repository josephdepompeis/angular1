(function(angular) {


    var matchModule = angular.module('matchModule', [])
    matchModule.component('match', {
        templateUrl: "match/match.component.html",
        controller: matchController,
        controllerAs: 'mc'
    });

    function matchController( userLoginService, createMatchService, matchIndexService  ) {
      this.loggedInUser = userLoginService.loggedInUser;
      this.createdMatch = createMatchService.createdMatch;

      matchIndexService.getMatches().then ( (data) => {
        this.matchList = data;
      });




        //
        // this.submit = function (form) {
        //   console.log("yeahbitch")
        //   if (form.$valid) {
        //     console.log(form)
        //     console.log(form.uPassword.$$lastCommittedViewValue);
        //     console.log(form.uEmail.$$lastCommittedViewValue);
        //     this.formResults = {
        //         "password": form.uPassword.$$lastCommittedViewValue
        //       , "email":  form.uEmail.$$lastCommittedViewValue
        //     }
        //     console.log(this.formResults);
        //     userLoginService.logInUser( this.formResults ).then ( (data) => {
        //     this.loggedInUser = userLoginService.loggedInUser;
        //     });
        //     this.loggedInUser = userLoginService.loggedInUser;
        //   }
        // };
    }





})(window.angular);
