(function (angular) {
  "use strict";

  angular.module("characterSelect", [])
    .component("characterSelector", {
      templateUrl: "characterSelect/characterSelect.component.html",
      transclude: true,
      bindings: {
        heading: "@",
        character: '=character'
      },
      controller: characterSelectController
    });

    function characterSelectController ( currentCharacterService ) {
      currentCharacterService.getCurrentCharacters().then ( (data) => {
        this.currentCharacterList = data;
      });


      var sc = this;
      this.characterSelected = "";
      this.setCharacter = function(characterSelected) {
          currentCharacterService.setCharacter(characterSelected);
          this.characterSelected = characterSelected
      };

      var sc = this;
      this.characterSelectedVs = "";
      this.setCharacterVs = function(characterSelectedVs) {
          currentCharacterService.setCharacterVs(characterSelectedVs);
          this.characterSelectedVs = characterSelectedVs
      };
    }






    // function characterList( characterService ) {
    //   characterService.getCharacters().then ( (data) => {
    //     this.characterList = data;
    //   });
    // }
    //
    //




})(window.angular);
