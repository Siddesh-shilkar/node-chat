var socket = io();

socket.on('connect', function()  {
    console.log('Connected to server');
})

socket.on('disconnect', function() {
    console.log('Disconnected from server')
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
    var li = $('<li></li>')
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

socket.emit('createMessage', {
    from: 'Jaja',
    text: 'Hi'
}, function(){
    console.log('Got it');
});

$('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function(){
        
    })
});