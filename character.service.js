// (function(angular) {
//         angular.module('characterServiceModule', [])
//         .service('characterService', function($http) {
//
//           // pulledCharacterList = [];
//           this.getCharacters = function() {
//             return $http.get('../../demo-data/employees.json').then((response) => {
//               // response.data = pulledCharacterList;
//               return response.data;
//             })
//           };
//
//           // this.oldData = function() {
//           //   // return pulledCharacterList
//           //   // return $http.get('../../demo-data/employees.json').then((response) => {
//           //   //   return response.data;
//           //   // })
//           // };
//
//
//
//         });
//
// })(window.angular);

(function(angular) {
        angular.module('characterServiceModule', [])
        .service('characterService', function($http) {
          var serviceCall = $http.get('http://localhost:3000/characters.json');
          this.getCharacters = function() {
            serviceCall.then((response) => { console.log('response', response) } );
            return serviceCall.then((response) => {
              return response.data;
            })
          };
        });
})(window.angular);
