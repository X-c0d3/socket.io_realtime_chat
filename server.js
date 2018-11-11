var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('client connected');
    let channel = 'chat message';

    // Listen
    socket.on(channel, (msg) => {
        console.log('message:' + msg);

        // Reply
        io.emit(channel, msg);
    });
});

http.listen(3000, () => {
    console.log('Server start on http://127.0.0.1:3000');
});