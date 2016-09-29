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

    function currentCharacterList ( currentCharacterService, createMatchService, characterService, userLoginService ) {
      characterService.getCharacters().then ( (data) => {
        this.currentCharacterList = data;
      });


      this.characterSelected = currentCharacterService.characterSelected;
      this.characterSelectedVs = currentCharacterService.characterSelectedVs;
      this.currentMatch = createMatchService.currentMatch;
      this.createdMatch = createMatchService.createdMatch;
      this.loggedInUser = userLoginService.loggedInUser;
// cons

      // console.log(this.loggedInUser);




      // this.currentMatch = "replace me~";
      this.createMatch = function(characterSelected , characterSelectedVs, loggedInUser) {
          createMatchService.createMatch(characterSelected , characterSelectedVs, loggedInUser).then ( (data) => {
            this.createdMatch = createMatchService.createdMatch;
          });

          this.currentMatch = createMatchService.currentMatch;

          // this.createdMatch = createMatchService.createdMatch;

      };

 //      this.newMatch = function(this.characterSelected , this.characterSelectedVs)
 // {
 //   return characterSelected.characterSelected.id + "and " + $ctrl.characterSelectedVs.characterSelectedVs.id
 //
 // };


      // currentCharacterService.text

      //
      // var sc = this;
      // this.text = "";
      // this.setText = function(text) {
      //     currentCharacterService.setText(text);
      //     this.text = text
      // };





    }










})(window.angular);
