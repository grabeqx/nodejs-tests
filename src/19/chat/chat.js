function init(io) {

    io.on('connection', function(socket){

        socket.on('join', function(nick) {
            socket.nick = nick;

            io.emit('status', {
                time: Date.now(),
                status: nick + ' dołączył/a do czatu'
            });

        });

        socket.on('disconect', function(socket){

            io.emit('status', {
                time: Date.now(),
                status: nick + ' upuścił/a czat'
            })

        });

        socket.on('message', function(msg) {
            io.emit('message', {
                time: Date.now(),
                nick: socket.nick,
                message: msg
            })
        });

        

    })

}

module.exports = init;