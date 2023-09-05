var url = "mylogger.io/log";

function log(message) {
    // Send an HTTP request
    console.log(message);
}

module.exports.log = log;

// only exporting only one function
// module.exports = log;