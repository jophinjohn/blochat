(function () {
  function WelcomeCtrl(Authorization, $state, $scope) {
    
    this.auth = Authorization; 
    
    Authorization.authObj.$onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        $state.go('homePage');
      }
    });

  }
  
  angular
    .module("blocChat")
    .controller("WelcomeCtrl", ["Authorization", "$state", "$scope", WelcomeCtrl]);
})(); 