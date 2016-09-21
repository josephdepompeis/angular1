(function(angular) {
        angular.module('characterModule', [])
        .component( 'characterList', {
          templateUrl: 'characterList/characterList.component.html',
          controller: characterList
        });

        function characterList( characterService ) {
          characterService.getCharacters().then ( (data) => {
            this.characterList = data;
          });
        }

})(window.angular);
