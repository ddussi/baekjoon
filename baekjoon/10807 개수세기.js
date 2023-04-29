const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
const copy_input = input.slice();
const oper =  copy_input.shift();
const target = copy_input.pop();
let answer = 0;
for(let i= 0; i< oper ; i++){
    if(copy_input[i] === target){
        answer += 1;
    }
}
console.log(answer);