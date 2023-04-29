const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy_input = input.slice();
let code = copy_input[0];
let answer =code.charCodeAt();
console.log(answer);