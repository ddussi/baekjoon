const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy_input = input.slice(2);
let num = input.slice(0,2);
let size = num[0]*num[1];
let fir = copy_input.slice(0,size);
let sec = copy_input.slice(size);
let answer = "";
for(let i=0;i<size; i++){
    answer += fir[i]+sec[i]
    if((i+1)%num[0]===0){
        answer += "\n";
    }else{
        answer += " ";
    }
}
console.log(answer);