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


      this.matchDisplayLink = function(match){
        matchIndexService.setMatch(match);
        window.location = "#/matchdisplay";
      };


      matchIndexService.getMatches().then ( (data) => {
        this.matchList = data;
      });






    }





})(window.angular);
