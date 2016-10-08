(function(angular) {
        angular.module('matchNotesServiceModule', [])
        .service('matchNotesService', function($http) {
          var serviceCall = $http.get('http://localhost:3000/notes.json');

          var matchNotes = {undefined:"undefined"};
          this.getMatchNotes = function() {
            serviceCall.then((response) => { console.log('response', response) } );
            return serviceCall.then((response) => {
              return response.data;
            })
          };

        });
})(window.angular);
