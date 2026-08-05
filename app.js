const fs = require("fs");
const data = fs.readFileSync('notes.txt', 'utf8');
console.log(data);
fs.writeFileSync('notes.txt', 'this file is created by node.js');



const path = require('parth');
const filepath = path.join(_dirname, 'data', 'hello.text');
comnnsole.log(filepath);


const os= require("os");
const user= os.userInfo();
console.log(userinfo);
