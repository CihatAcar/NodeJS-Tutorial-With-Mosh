// For the classes start with uppercase, EventEmitter is a class
const EventEmitter = require("events");

// Raise an event - Produces signalling that event happened.
// emitter.emit("messageLogged", {id: 1, url: "https://"});

// Raise: logging (data: message)
// Look at the logger file (module)

const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("messageLogged", (arg) => {
    console.log("Listener called", arg);
})

logger.log("message");
