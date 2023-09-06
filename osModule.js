const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Total Memory: " + totalMemory);
console.log("Free Memory: " + freeMemory);

// another way of print strings concatenations which will give same output as above.
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
