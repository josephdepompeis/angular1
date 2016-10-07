(function (angular) {
  "use strict";

  angular.module("currentCharacterSelected", [])
    .component("currentCharacterSelected", {
      templateUrl: "currentCharacterSelected/currentCharacterSelected.component.html",
      transclude: true,
      bindings: {
        heading: "@",
        character: '=character',
        user: '=user'
      },
      controller: currentCharacterList
    });

    function currentCharacterList ( currentCharacterService, createMatchService, characterService, userLoginService, matchIndexService ) {
      characterService.getCharacters().then ( (data) => {
        this.currentCharacterList = data;
      });

      matchIndexService.getMatches().then ( (data) => {
        this.matchList = data;
      });


      this.matchDisplayLink = function(match){
        matchIndexService.setMatch(match);
        window.location = "#/matchdisplay";
      };


      this.characterSelected = currentCharacterService.characterSelected;
      this.characterSelectedVs = currentCharacterService.characterSelectedVs;
      this.currentMatch = createMatchService.currentMatch;
      this.createdMatch = createMatchService.createdMatch;
      this.loggedInUser = userLoginService.loggedInUser;

      this.createMatch = function(characterSelected , characterSelectedVs, loggedInUser) {
          createMatchService.createMatch(characterSelected , characterSelectedVs, loggedInUser).then ( (data) => {
            this.createdMatch = createMatchService.createdMatch;
            this.matchDisplayLink(this.createdMatch);
          });

          this.currentMatch = createMatchService.currentMatch;
      };

    }










})(window.angular);
