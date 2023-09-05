console.log(); // global object
setTimeout(); // global object
clearTimeout(); // global object

setInterval(); // global object
clearInterval(); // global object

// Window is not availabe in node
window.console.log();
// In node we have global
global.console.log();
