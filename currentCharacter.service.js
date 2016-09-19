(function(angular) {
        angular.module('currentCharacterServiceModule', [])
        .service('currentCharacterService', function($http) {

          var serviceCall = $http.get('http://localhost:3000/characters.json');

          this.getCurrentCharacters = function() {
            serviceCall.then((response) => {
              console.log('response', response);
              console.log('response', response.data[0]);
              this.character = response.data[0];
              this.characterVs = response.data[1];
              console.log('response', this.character);
              console.log('response', this.characterVs);

           } );
            return serviceCall.then((response) => {
              return response.data;
            });
          };


          this.characterSelected = {characterSelected:"unchosen"};
          this.setCharacter = function(characterSelected) {
              this.characterSelected.characterSelected = characterSelected;
              console.log('characterSelected', this.characterSelected);
              // var sendCharacter = $http.post('http://localhost:3000/characters.json', text);
          };


          this.characterSelectedVs = {characterSelectedVs:"unchosen"};
          this.setCharacterVs = function(characterSelectedVs) {
              this.characterSelectedVs.characterSelectedVs = characterSelectedVs;
              console.log('characterSelectedVs', this.characterSelectedVs);
              // var sendCharacter = $http.post('http://localhost:3000/characters.json', text);
          };


        });
})(window.angular);
