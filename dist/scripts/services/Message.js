(function() {
  function Message($firebaseArray, $cookies,Authorization) {
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
             username: Authorization.getCurrentUser().displayName,
            body: newMessage,
            roomId: roomId,
            sentAt: timeFormat()
         };
         
         //Update the messages array with our new message object
         messages.$add(message);   
        
    }
  };
    function timeFormat() {
		var date = new Date();
 			var h = date.getHours();
 			var m = date.getMinutes();
 			var s = date.getSeconds();
 			var dayNight = "AM";
 
 			if (h > 12) {
 				h -= 12;
 				dayNight = "PM";
 			}
 			if (m < 10) {
 				m = "0" + m;
 			}
 			if (s < 10) {
 				s = "0" + s;
 			}
 			return h + ":" + m + " " + dayNight;
 		}
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies',"Authorization", Message]);
})();