(function() {
    function HomeCtrl(BlocChatCookies,Authorization,Room, Message) {
        this.auth = Authorization;
        this.roomData = Room;
        this.addRoom = function(chatRoomName) {
            this.roomData.add(chatRoomName)
        }
    
    this.selectedRoom=null;
        
    this.selectRoom = function(room) {
            this.selectedRoom = room;
            console.log('selected room', this.selectedRoom);
            this.messages = Message.getByRoomId(this.selectedRoom.$id);
            console.log('messages',this.messages);
        }
    
    
    
    //To get Current User
    this.currentUser = Authorization.getCurrentUser(); 
    
    //Save Username
    this.saveUserName = function(userName) {
      BlocChatCookies.saveUserName(userName); 
      this.currentUser = BlocChatCookies.getCurrentUser();
    }
    
    this.sendMessages = function(message, room) {
        Message.send(message, room);
        this.newMessage = '';
    }
  }
    angular
        .module('blocChat')
        .controller("HomeCtrl", [ 'BlocChatCookies','Room',"Authorization", 'Message', HomeCtrl])
})();