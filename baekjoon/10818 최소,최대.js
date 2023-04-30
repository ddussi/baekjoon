const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number)
let copy_input = input.slice();
let num = copy_input.shift();
let max = copy_input[0];
let min = copy_input[0];
for (let i = 1; i < num; i++) {
if(max <copy_input[i]){
    max = copy_input[i]
}
if(min >copy_input[i]){
    min = copy_input[i]
}
}
console.log(min+" "+max);