const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, './public');
const app = express();
const PORT = 3000 || process.env.PORT;

let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected.');
    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected'); 
    })
});

server.listen(PORT, () => {
    console.log(`Connected to port: ${PORT}`);
})