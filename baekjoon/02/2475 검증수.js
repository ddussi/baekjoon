const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy_input = input.slice();
let answer = 0;
for(let i = 0; i<5 ; i++){
    answer += copy_input[i]**2 ;
}

console.log(answer%10);