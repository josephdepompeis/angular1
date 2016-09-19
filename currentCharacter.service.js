(function(angular) {
        angular.module('currentCharacterServiceModule', [])
        .service('currentCharacterService', function($http) {

          var serviceCall = $http.get('http://localhost:3000/characters.json');





          // var sendCharacter = $http.post('http://localhost:3000/characters.json', {"name":"Zero Suit Samus","weight":null,"weight_rank":null,"run_speed":null,"run_speed_rank":null,"walk_speed":null,"walk_speed_rank":null,"air_speed":null,"air_speed_rank":null,"fall_speed":null,"fall_speed_rank":null,"fast_fall_speed":null,"fast_fall_speed_rank":null,"air_acceleration":null,"gravity":null,"sh_air_time":null,"max_jump":null,"wall_jump":null,"wall_cling":null,"crawl":null,"tether":null,"jump_sqaut":null,"soft_landing_lag":null,"hard_landing_lag":null,"fh_air_time":null,"created_at":"2016-09-18T22:19:57.769Z","updated_at":"2016-09-18T22:19:57.769Z","ground_moves":[],"grabs":[],"matches":[],"against":[]});
          // var sendCharacterVs = $http.post('http://localhost:3000/characters.json', {"name":"Zero Sdduit Samus","weight":null,"weight_rank":null,"run_speed":null,"run_speed_rank":null,"walk_speed":null,"walk_speed_rank":null,"air_speed":null,"air_speed_rank":null,"fall_speed":null,"fall_speed_rank":null,"fast_fall_speed":null,"fast_fall_speed_rank":null,"air_acceleration":null,"gravity":null,"sh_air_time":null,"max_jump":null,"wall_jump":null,"wall_cling":null,"crawl":null,"tether":null,"jump_sqaut":null,"soft_landing_lag":null,"hard_landing_lag":null,"fh_air_time":null,"created_at":"2016-09-18T22:19:57.769Z","updated_at":"2016-09-18T22:19:57.769Z","ground_moves":[],"grabs":[],"matches":[],"against":[]});

          // $http.post('data/currentCharacters.json', this.character);

          // var serviceCall = $http.get('data/currentCharacters.json');
          // this.character = [{"name":"boner"}];
          // this.characterVs = {"name":"boner2"};


          //
          //
          // console.log('response', this.character);
          // console.log('response', this.characterVs);


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


          // this.character = {text:""};


          //
          // this.setCurrentCharacter = function( character ) {
          //   // this.text.text = text;
          //   this.character = character;
          //   sendCharacter.then((response) => { console.log('response', response) } );
          //   return serviceCall.then((response) => {
          //     return response.data;
          //   });
          // };


          //
          //
          // this.text = {text:""};
          //
          // this.setText = function(text) {
          //     this.text.text = text;
          //     console.log('text', this.text)
          // };
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
