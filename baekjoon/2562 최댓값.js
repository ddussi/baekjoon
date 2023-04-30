const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let copy_input = input.slice();
let answer = copy_input[0];
let num = 1;
for(let i = 1; i<9; i++){
    if(answer < copy_input[i]){
        answer = copy_input[i];
        num = i+1;
    }
}
console.log(answer+"\n"+num);