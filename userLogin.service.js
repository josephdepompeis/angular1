(function(angular) {
        angular.module('userLoginServiceModule', [])
        .service('userLoginService', function($http) {

          this.loggedInUser = {uncreated:"uncreated"};

          this.logInUser = function( formResults ) {
            console.log('currentMatch', formResults);
            var sendUser = $http.post('http://localhost:3000/sessions/login', formResults).then((response) =>
            { console.log('response', response.data);
            this.loggedInUser = response;
            } );
            return sendUser.then((response) => {
              console.log('created jawn', this.loggedInUser);
              return response;
            })
          };









        });
})(window.angular);
