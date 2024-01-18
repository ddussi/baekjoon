const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy_input = input.slice();
let answer = copy_input[0].length;
console.log(answer);