(function() {
    function HomeCtrl(Room, Message) {
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
    }
    
    angular
        .module('blocChat')
        .controller("HomeCtrl", ['Room', 'Message', HomeCtrl])
})();