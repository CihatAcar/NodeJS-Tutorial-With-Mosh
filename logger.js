// Added for events module
const EventEmitter = require("events");

var url = "mylogger.io/log";

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise an event - Produces signalling that event happened.
        this.emit("messageLogged", {id: 1, url: "https://"});
    }    
}

module.exports = Logger;

// only exporting only one function
// module.exports = log;