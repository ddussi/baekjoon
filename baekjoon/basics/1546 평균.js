const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy = input.slice();
let num = copy.shift();
let answer = 0;
for(key of copy){
    answer += key/Math.max(...copy)*100/num;
}
console.log(answer);