const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy = input.slice();
let answer = "";
for(let i = 1 ; i <copy[0]+1; i++){
   let blank = " ";
   let star = "*";
   answer += blank.repeat(copy[0]-i)+star.repeat(i)+"\n";
}
console.log(answer);