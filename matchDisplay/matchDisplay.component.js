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

    }





})(window.angular);
