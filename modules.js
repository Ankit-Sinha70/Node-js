const fs = require('fs');
const os = require('os');

fs.writeFileSync('dummy.txt', 'This is a dummy file for testing purposes.', 'utf8');

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
console.log(os.freemem());
