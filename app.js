(function(angular) {
    angular.module('workjawnApp', [
            'characterServiceModule', 'currentCharacterServiceModule', 'createMatchServiceModule', 'createUserServiceModule', 'characterModule', 'expando', 'characterSelect', 'currentCharacterSelected', 'someFilters', 'drag', 'ngRoute', 'ngMessages', 'dashboardModule', 'loginModule', 'newUserModule', 'userLoginServiceModule', 'matchModule', 'matchIndexServiceModule', 'matchDisplayModule', 'matchNotesServiceModule'
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/welcome', {
                    template: '<center><h3>Character Select-1000<br><br><br><br><a href="#/dashboard">enter</a><br><a href="#/login">login</a><br><a href="#/newUser">newUser</a><br><a href="#/match">match</a><br><a href="#/matchdisplay">match display</a><br></h3></center>'
                })
                .when('/dashboard', {
                    template: '<dashboard></dashboard>'
                })
                .when('/login', {
                    template: '<login></login>'
                })
                .when('/newUser', {
                    template: '<new-user></new-user>'
                })
                .when('/match', {
                    template: '<match></match>'
                })
                .when('/matchdisplay', {
                    template: '<match-display></match-display>'
                })
                .otherwise({
                    redirectTo: '/login'
                })
        })

})(window.angular);
