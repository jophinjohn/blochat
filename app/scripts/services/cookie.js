(function() {
  function BlocChatCookies($cookies) {
    
 
    var saveUserName = function(userName) {
      console.log(userName);
      console.log("test");
      $cookies.put('blocChatCurrentUser', userName);
    };
    
    var getCurrentUser = function() {
      return $cookies.get('blocChatCurrentUser');
    
    };
    
    return {
      saveUserName: saveUserName,
      getCurrentUser: getCurrentUser
    };
  }

  angular
    .module('blocChat')
    .factory('BlocChatCookies', ['$cookies', BlocChatCookies]);
})();