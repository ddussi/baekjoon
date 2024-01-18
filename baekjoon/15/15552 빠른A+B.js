const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
const num = input[0];
const num_arr = input.slice(1);
let answer = "";
for(let i= 0; i<num ; i++){
    answer += (num_arr[(i*2)]+num_arr[1+(i*2)])+"\n"
}
console.log(answer);