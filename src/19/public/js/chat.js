(function() {

    var socket = io.connect("http://localhost:8080");

    var joinForm = $("#join-form"),
        nick = $("#nick"),
        chatForm = $("#chat-form"),
        chatWindow = $("#chat-window"),
        chatMessage = $("#message"),
        chatStatusTpl = Handlebars.compile($('#chat-status-template').html()),
        joined = false;

    joinForm.on("submit", function(e) {

        e.preventDefault();

        var nickName = $.trim( nick.val() );

        if(nickName === "") {
            nick.addClass("invalid");
        } else {
            nick.removeClass("invalid");

            socket.emit('join', nickName);1

            joinForm.hide();
            chatForm.show();

            joined = true;
        }

    });

    chatForm.on("submit", function(e) {

        e.preventDefault();

        var message = $.trim( chatMessage.val() );

        if(message !== "") {
            socket.emit('message', message);
            chatMessage.val("");
        }

    });

    socket.on('status', function(data) {

        if(!joined) {
            return;
        }

        var html = chatStatusTpl(data);
        chatWindow.append(html);
    });


    socket.on('message', function(msg) {

        if(!joined) {
            return;
        }

        var html = chatStatusTpl(msg);
        chatWindow.append(html)
    })

    

})();