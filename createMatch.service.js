(function(angular) {
        angular.module('createMatchServiceModule', [])
        .service('createMatchService', function($http) {

          this.currentMatch = {unmatched:"unmatched"};
          this.createdMatch = {uncreated:"uncreated"};

          this.createMatch = function(characterSelected , characterSelectedVs , loggedInUser) {
            console.log('currentMatch characterSelected', characterSelected.characterSelected);
            console.log('currentMatch characterSelectedVs', characterSelectedVs.characterSelectedVs);
            console.log('logged in mate', loggedInUser);
            // console.log('logged in id', loggedInUser.data.id);

            this.currentMatch = {"playing_as":characterSelected.characterSelected.id,"playing_against":characterSelectedVs.characterSelectedVs.id, "user_id": loggedInUser};
            console.log('currentMatch', this.currentMatch);
            console.log('logged in mate', loggedInUser);
            // console.log('logged in id', loggedInUser.data.id);

            var sendCharacter = $http.post('http://localhost:3000/matches.json', this.currentMatch).then((response) =>
            { console.log('response', response.data);
            this.createdMatch = response;
            } );
            return sendCharacter.then((response) => {
              console.log('created jawn', this.createdMatch);
              return response;
            })
          };


          // angular.module('characterServiceModule', [])
          // .service('characterService', function($http) {
          //   var serviceCall = $http.get('http://localhost:3000/characters.json');
          //   this.getCharacters = function() {
          //     serviceCall.then((response) => { console.log('response', response) } );
          //     return serviceCall.then((response) => {
          //       return response.data;
          //     })
          //   };
          // });






        });
})(window.angular);
