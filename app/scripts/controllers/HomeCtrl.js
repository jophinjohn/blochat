(function() {
    function HomeCtrl(BlocChatCookies,Room, Message) {
        this.roomData = Room;
        this.addRoom = function(chatRoomName) {
            this.roomData.add(chatRoomName)
        }
    
        
    this.selectRoom = function(room) {
            this.selectedRoom = room;
            console.log('selected room', this.selectedRoom);
            this.messages = Message.getByRoomId(this.selectedRoom.$id);
            console.log('messages',this.messages);
        }
    
    
    
    //To get Current User
    this.currentUser = BlocChatCookies.getCurrentUser();
    
    //Save Username
    this.saveUserName = function(userName) {
      BlocChatCookies.saveUserName(userName); 
      this.currentUser = BlocChatCookies.getCurrentUser();
    }
    
    this.sendMessages = Message.send; 
  }
    angular
        .module('blocChat')
        .controller("HomeCtrl", [ 'BlocChatCookies','Room', 'Message', HomeCtrl])
})();