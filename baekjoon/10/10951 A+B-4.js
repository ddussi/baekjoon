const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
const num = input.slice();
let answer = "";
for(let i= 1; num.length>0 ; i++){
    answer += (num.shift()+num.shift())+"\n"
}
console.log(answer);