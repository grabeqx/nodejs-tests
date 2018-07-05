const Event = require('events');

class Puller extends Event {
    constructor(url) {
        super();
        this.url = url;

        this.on('removeListener', () => {
            var number = this.listenerCount('data');

            if(number === 0 ) {
                clearInterval(this.interval);
            }
        })

    }

    pull() {
        this.interval = setInterval(() => {
            this.emit('data', {
                data: 'pobrane dane',
                url: this.url
            })
        }, 1000)
    }

    stop(cb) {
        this.removeListener('data', cb);
    }

};

module.exports = Puller;