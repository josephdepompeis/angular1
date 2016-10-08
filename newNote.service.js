
(function(angular) {
        angular.module('newNoteServiceModule', [])
        .service('newNoteService', function($http) {

          this.latestNote = {};


          this.submitNewNote = function( formResults ) {
            console.log('newNote', formResults);
            var sendNewNote = $http.post('http://localhost:3000/notes', formResults).then((response) =>
            { console.log('response', response.data);
            this.latestNote.latestNote = response.data;
            } );
            return sendNewNote.then((response) => {
              console.log('created note', this.latestNote);

              return response;
            })
          };

        });
})(window.angular);


//
//
// (function(angular) {
//         angular.module('newNoteServiceModule', [])
//         .service('newNoteService', function($http) {

//           this.latestNote = {noNotesTaken:"noNotesTaken"};
//
//           this.submitNewNote = function( formResults ) {
//             console.log('currentMatch', formResults);
//             var sendUser = $http.post('http://localhost:3000/sessions/login', formResults).then((response) =>
//             { console.log('response', response.data);
//             this.loggedInUser = response;
//             } );
//             return sendUser.then((response) => {
//               console.log('created jawn', this.loggedInUser);
//               return response;
//             })
//           };
//
//         });
// })(window.angular);
