const logger = require("./logger");

console.log(logger);
logger.log("message");

// only exporting only one function
// After change the logger.js comment out
// logger("message")