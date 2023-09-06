// node wraps the module as a function when running JavaScript code like in the following way:
// So it collects exports, require, and module. The file name and directory name.
// When we are executing the code node wraps all of this and runs the code so we are actually not seeing this.
// So the following code is just a representation of the node module wrapper. 

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
