var socket= io();

socket.on('connect',function(){
console.log('connected to server');

socket.emit('createMessage',{
	to: 'pulkit dilaury',
	text:'hey,pulkit'
});

});
socket.on('disconnect',function(){
console.log('disconnected to server');
});


socket.on('newMessage',function(message){
console.log('newMessage',message);
});