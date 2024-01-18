const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let a = parseInt(input[0]);
let answer = 1
for (let i = 0; i < a; i++) {
    answer = answer * (i+1)
}
console.log(answer);