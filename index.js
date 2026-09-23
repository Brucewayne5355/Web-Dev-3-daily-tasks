const os = require('os');

console.log('Operating System Info:');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
