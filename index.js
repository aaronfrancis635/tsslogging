class Logger {
    constructor(TBA) {
        this.TBA = TBA;
    }

    info(topic, message) {
        console.log('\x1b[36m%s\x1b[0m', topic + ": " + message);
    }

    warn(topic, message) {
        console.log('\x1b[33m%s\x1b[0m', topic + ": " + message);
    }

    danger(topic, message) {
        console.log('\x1b[31m%s\x1b[0m', topic + ": " + message);
    }

}

module.exports = Logger;