var socket = io();

socket.on('connect', function()  {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'abc@xyz.com',
        text: 'Hello Baab'
    });
})

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});