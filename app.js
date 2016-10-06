(function(angular) {
 angular.module('workjawnApp', ['characterServiceModule', 'currentCharacterServiceModule','createMatchServiceModule','createUserServiceModule', 'characterModule', 'expando', 'characterSelect', 'currentCharacterSelected', 'someFilters', 'drag', 'ngRoute','ngMessages', 'dashboardModule', 'loginModule',  'newUserModule', 'userLoginServiceModule', 'matchModule', 'matchIndexServiceModule', 'matchDisplayModule'])
 .config(function($routeProvider){
     $routeProvider
         .when('/welcome',{
             template: '<center><h3>Character Select-1000<br><br><br><br><a href="#/dashboard">enter</a><br><a href="#/login">login</a><br><a href="#/newUser">newUser</a><br><a href="#/match">match</a><br><a href="#/matchdisplay">match display</a><br></h3></center>'
         })
         .when('/dashboard',{
             template: '<dashboard></dashboard>'
         })
         .when('/login',{
             template: '<login></login>'
         })
         .when('/newUser',{
             template: '<new-user></new-user>'
         })
         .when('/match',{
             template: '<match></match>'
         })
         .when('/matchdisplay',{
             template: '<match-display></match-display>'
         })
         .otherwise({
             redirectTo: '/welcome'
         })
 })


})(window.angular);



// * Create your own folder
// * Demo data
// * load via $http in a service, return promise, in its own file/module
// * Chain promise from above service
// * List display component (directive), isolate scope, bind in data
// * Search using filter filter
// * Button with click handler
// * img with ng-src
// * Format based on data with ng-class or ng-show or ng-if etc
