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

    function currentCharacterList ( currentCharacterService ) {
      currentCharacterService.getCurrentCharacters().then ( (data) => {
        this.currentCharacterList = data;
      });


      this.text = currentCharacterService.text;



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
