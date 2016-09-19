(function (angular) {
  "use strict";

  angular.module("currentCharacterSelected", [])
    .component("currentCharacterSelected", {
      templateUrl: "currentCharacterSelected/currentCharacterSelected.component.html",
      transclude: true,
      bindings: {
        heading: "@",
        character: '=character'
      },
      controller: currentCharacterList
      // controllerAs: 'characterList'
    });

    function currentCharacterList ( currentCharacterService, createMatchService ) {
      currentCharacterService.getCurrentCharacters().then ( (data) => {
        this.currentCharacterList = data;
      });


      this.characterSelected = currentCharacterService.characterSelected;
      this.characterSelectedVs = currentCharacterService.characterSelectedVs;


      // this.characterSelectedVs = "";
      // this.setCharacterVs = function(characterSelectedVs) {
      //     currentCharacterService.setCharacterVs(characterSelectedVs);
      //     this.characterSelectedVs = characterSelectedVs
      // };



      this.currentMatch = createMatchService.currentMatch;

      // this.currentMatch = "replace me~";
      this.createMatch = function(characterSelected , characterSelectedVs) {
          createMatchService.createMatch(characterSelected , characterSelectedVs);
          this.currentMatch = createMatchService.currentMatch;
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
