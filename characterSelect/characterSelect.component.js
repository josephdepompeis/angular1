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
      this.text = "";
      this.setCharacter = function(text) {
          currentCharacterService.setCharacter(text);
          this.text = text
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
