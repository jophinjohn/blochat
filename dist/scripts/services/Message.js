(function() {
  function Message($firebaseArray) {
    var messagesRef = firebase.database().ref().child('messages') //; 
    var messages = $firebaseArray(messagesRef);
   
    return {
      all: messages,
      getByRoomId: function (roomId) {
          console.log('roomId', roomId)
         return $firebaseArray(messagesRef.orderByChild('roomId').equalTo(roomId)); 
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();