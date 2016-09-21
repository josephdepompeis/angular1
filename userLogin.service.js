(function(angular) {
        angular.module('userLoginServiceModule', [])
        .service('userLoginService', function($http) {

          this.createdUser = {uncreated:"uncreated"};

          this.createUser = function( formResults ) {
            console.log('currentMatch', formResults);
            var sendUser = $http.post('http://localhost:3000/users.json', formResults).then((response) =>
            { console.log('response', response.data);
            this.createdUser = response;
            } );
            return sendUser.then((response) => {
              console.log('created jawn', this.createdUser);
              return response;
            })
          };







        });
})(window.angular);
