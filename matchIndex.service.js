(function(angular) {
        angular.module('matchIndexServiceModule', [])
        .service('matchIndexService', function($http) {
          var serviceCall = $http.get('http://localhost:3000/matches.json');
          this.getMatches = function() {
            serviceCall.then((response) => { console.log('response', response) } );
            return serviceCall.then((response) => {
              return response.data;
            })
          };
        });
})(window.angular);
