(function(angular) {
        angular.module('matchNotesServiceModule', [])
        .service('matchNotesService', function($http) {
          var serviceCall = $http.get('http://localhost:3000/notes.json');

          this.matchNotes = {};

          //
          // this.getMatchNotes = function() {
          //   serviceCall.then((response) => { console.log('response', response) } );
          //   return serviceCall.then((response) => {
          //     this.matchNotes.matchNotes = response.data;
          //     // return response.data;
          //   })
          // };
          // this.getMatchNotes = function( ) {
          //   // console.log('newNote', formResults);
          //   var sendNewNote = $http.post('http://localhost:3000/notes', formResults).then((response) =>
          //   { console.log('response', response.data);
          //   this.latestNote.latestNote = response.data;
          //   } );
          //   return sendNewNote.then((response) => {
          //     console.log('created note', this.latestNote);
          //
          //     return response;
          //   })
          // };



          this.getMatchNotes = function(  ) {
            // console.log('newNote', formResults);
            var getRecentMatches = $http.get('http://localhost:3000/notes.json').then((response) =>
            { console.log('response', response.data);
            this.matchNotes.matchNotes = response.data;
            } );
            return getRecentMatches.then((response) => {
              console.log('updated match notes!', this.matchNotes);
              return response;
            })
          };












        });
})(window.angular);
