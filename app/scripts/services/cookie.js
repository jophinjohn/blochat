(function() {
  function BlocChatCookies($cookies) {
    
//    
//    if (!currentUser || currentUser === '') {
//      $uibModal.open({
//        // Modal configuration object properties
//      })
//    }
    
    var saveUserName = function(userName) {
      console.log(userName);
      console.log("test");
      $cookies.put('blocChatCurrentUser', userName);
    };
    
    var getCurrentUser = function() {
      return $cookies.get('blocChatCurrentUser');
    }
    
    return {
      saveUserName: saveUserName,
      getCurrentUser: getCurrentUser
    };
  }

  angular
    .module('blocChat')
    .factory('BlocChatCookies', ['$cookies', BlocChatCookies]);
})();