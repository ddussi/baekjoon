const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const num = input[0];
let answer = "";
for(let i= 1; i<10 ; i++){
    answer += `${num} * ${i} = ${parseInt(num*i)}\n`; 
}
console.log(answer);