(function() {
  function Authorization($firebaseArray, $firebaseAuth, $state) {
    var ref = firebase.database().ref().child("users");
    var users = $firebaseArray(ref);
  
    //Get Current User
    var currentUser = $firebaseAuth().$getAuth();
    console.log(currentUser);
    
    //Creates User
    var createUser = function(email, password, username) {
      $firebaseAuth().$createUserWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
        
        firebaseUser.updateProfile({
          displayName: username
        }); 
        
        var user = {
          username: username, 
          uid: firebaseUser.uid
        };
        
         users.$add(user);
          
          console.log("User " + firebaseUser.uid + " created successfully!");
          console.log(firebaseUser);  

        }).catch(function(error) {
          console.error("Error: ", error);
        });
    };
    
    //Sign in User
    var signInUser = function(email, password) {
      $firebaseAuth().$signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          console.log("Signed in");
        }).catch(function(error) {          
          console.error("Authentication failed:", error);
        });
    };
    
    var signOut = function() {
      $firebaseAuth().$signOut();
      $state.go('welcomePage');
    };
    
    $firebaseAuth().$onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
        currentUser = firebaseUser;
      } else {
        currentUser = null;
        console.log("Current user is null/signed out");
      }
    });
    
    var getCurrentUser = function() {
      return currentUser;
    };
     
    return {
      createUser: createUser,
      signInUser: signInUser, 
      getCurrentUser: getCurrentUser,
      authObj: $firebaseAuth(),
      signOut: signOut 
    };
  }

  angular
    .module('blocChat')
    .factory('Authorization', ["$firebaseArray","$firebaseAuth","$state", Authorization]);
})();