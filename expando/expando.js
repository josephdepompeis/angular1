(function (angular) {
  "use strict";

  angular.module("expando", [])

    .component("expando", {
      templateUrl: "expando/expando.html",
      transclude: true,
      bindings: {
        heading: "@",
        character: "@"
      },
      controllerAs: 'ec'
    });

})(window.angular);
