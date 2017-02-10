(function(angular) {
        angular.module('characterDropDownModule', [])
        .component( 'characterDropDown', {
          templateUrl: 'characterDropDown/characterDropDown.component.html',
          controller: characterDropDownController
        });

        function characterDropDownController( characterService, currentCharacterService) {


          characterService.getCharacters().then ( (data) => {
            this.characterList = data;
          });



					this.characterSelected = "";
					this.setCharacter = function(characterSelected) {
						console.log("json", JSON.stringify(characterSelected));

							// var characterSelectedObject = {"characterSelected": characterSelected};
							currentCharacterService.setCharacter(characterSelected);
							this.characterSelected = characterSelected;
					};

					this.characterSelectedVs = "";
					this.setCharacterVs = function(characterSelectedVs) {
						console.log("json", JSON.stringify(characterSelectedVs));
						// var characterSelectedVsObject = {"characterSelectedVs": characterSelectedVs};
							currentCharacterService.setCharacterVs(characterSelectedVs);
							this.characterSelectedVs = characterSelectedVs;
					};




        }

})(window.angular);
