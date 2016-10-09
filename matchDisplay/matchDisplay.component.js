(function(angular) {


    var matchDisplayModule = angular.module('matchDisplayModule', [])
    matchDisplayModule.component('matchDisplay', {
        templateUrl: "matchDisplay/matchDisplay.component.html",
        controller: matchDisplayController,
        controllerAs: 'mc'
    });

    function matchDisplayController( userLoginService, createMatchService, matchIndexService, matchNotesService, newNoteService  ) {
      matchNotesService.getMatchNotes().then ( (data) => {
        this.matchNotes = matchNotesService.matchNotes;
      });




      this.loggedInUser = userLoginService.loggedInUser;
      this.createdMatch = createMatchService.createdMatch;
      this.currentMatch = matchIndexService.currentMatch;
      this.matchNotes = matchNotesService.matchNotes;
      this.latestNote = newNoteService.latestNote;



      //

      //



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
