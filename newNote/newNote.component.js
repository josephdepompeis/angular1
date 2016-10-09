(function(angular) {


    var newNoteModule = angular.module('newNoteModule', [])
      newNoteModule.component('newNote', {
        templateUrl: "newNote/newNote.component.html",
        controller: FormController,
        controllerAs: 'fc'
    });

    function FormController( newNoteService , matchNotesService ) {

      this.latestNote = newNoteService.latestNote;



      this.dashboardLink = function(){
        window.location = "#/dashboard";
      }






        this.submit = function (form) {
          console.log("yeahbitch")
          if (form.$valid) {
            console.log(form)
            console.log(form.uPassword.$$lastCommittedViewValue);
            console.log(form.uNote.$$lastCommittedViewValue);
            this.formResults = {
                "match_id": form.uPassword.$$lastCommittedViewValue
              , "name":  form.uNote.$$lastCommittedViewValue
            }
            console.log(this.formResults);
            newNoteService.submitNewNote( this.formResults ).then ( (data) => {
            this.latestNote = newNoteService.latestNote;
            });
            this.latestNote = newNoteService.latestNote;
            matchNotesService.getMatchNotes().then ( (data) => {
              this.matchNotes = data;
              console.log(this.matchNotes);

            });
          }
        };
    }





})(window.angular);
