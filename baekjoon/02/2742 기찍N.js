const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy = input.slice();
let answer = "";
for(let i = 0 ; i <copy[0]; i++){
   answer += copy[0]-i + "\n";
}
console.log(answer);