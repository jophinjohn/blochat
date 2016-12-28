(function() {
  function Message($firebaseArray, $cookies) {
    var messagesRef = firebase.database().ref().child('messages') //; 
    var messages = $firebaseArray(messagesRef);
   
    return {
      all: messages,
      getByRoomId: function (roomId) {
          console.log('roomId', roomId)
         return $firebaseArray(messagesRef.orderByChild('roomId').equalTo(roomId)); 
      },
        send: function(newMessage, roomId) {
        var message = {
            username: $cookies.get('blocChatCurrentUser'),
            body: newMessage,
            roomId: roomId,
            sentAt: firebase.database.ServerValue.TIMESTAMP
         }
         
         //Update the messages array with our new message object
         messages.$add(message);   
        
    }
  };
    
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();