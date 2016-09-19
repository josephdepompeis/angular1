(function(angular) {
        angular.module('createMatchServiceModule', [])
        .service('createMatchService', function($http) {

          this.currentMatch = {unmatched:"unmatched"};

          this.createMatch = function(characterSelected , characterSelectedVs) {
            console.log('currentMatchzzz', characterSelected.characterSelected);
            console.log('currentMatchzzz', characterSelectedVs.characterSelectedVs);
            // this.currentMatch.currentMatch = characterSelected;
            // this.currentMatch = (characterSelected.characterSelected.id + "+" + characterSelectedVs.characterSelectedVs.id);
              this.currentMatch = {"playing_as":characterSelected.characterSelected.id,"playing_against":characterSelectedVs.characterSelectedVs.id};
              // console.log('currentMatch', this.currentMatch);
              console.log('currentMatch', this.currentMatch);
              var sendCharacter = $http.post('http://localhost:3000/matches.json', this.currentMatch);
          };



        });
})(window.angular);
