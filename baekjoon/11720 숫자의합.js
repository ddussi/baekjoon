const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy_input = input.slice();
let num = copy_input.shift();
let answer = 0;
for(let i = 0; i<Number(num); i++){
    answer += Number(copy_input[0][i])
}
console.log(answer);