(function(angular) {
        angular.module('matchIndexServiceModule', [])
        .service('matchIndexService', function($http) {
          var serviceCall = $http.get('http://localhost:3000/matches.json');

          var currentMatch = {undefined:"undefined"};
          this.getMatches = function() {
            serviceCall.then((response) => { console.log('response', response) } );
            return serviceCall.then((response) => {
              return response.data;
            })
          };

          this.setMatch = function(match) {
            this.currentMatch = match;
            console.log('currentMatch', this.currentMatch);

          };



        });
})(window.angular);
