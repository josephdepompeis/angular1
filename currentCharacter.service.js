(function(angular) {
        angular.module('currentCharacterServiceModule', [])
        .service('currentCharacterService', function($http) {

          this.characterSelected = {characterSelected:"unchosen"};
          this.characterSelectedVs = {characterSelectedVs:"unchosen"};

          this.setCharacter = function(characterSelected) {
              this.characterSelected.characterSelected = characterSelected;
              console.log('characterSelected yee', this.characterSelected);
              // var sendCharacter = $http.post('http://localhost:3000/characters.json', text);
          };

          this.setCharacterVs = function(characterSelectedVs) {
              this.characterSelectedVs.characterSelectedVs = characterSelectedVs;
              console.log('characterSelectedVs boo', this.characterSelectedVs);
              // var sendCharacter = $http.post('http://localhost:3000/characters.json', text);
          };


        });

})(window.angular);
