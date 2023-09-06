(function (exports, require, module, _filename, _dirname){

    console.log(__filename);
    console.log(__dirname);
    var url = "mylogger.io/log";

    function log(message) {
        // Send an HTTP request
        console.log(message);
    }

    module.exports = log;

})
