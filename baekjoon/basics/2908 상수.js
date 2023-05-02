const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy = input.slice();
let num1 = copy[0];
let num2 = copy[1];
let reNum1= num1[2]+num1[1]+num1[0];
let reNum2= num2[2]+num2[1]+num2[0];
if(Number(reNum1)-Number(reNum2) > 0){
    console.log(reNum1);
} else {
    console.log(reNum2);
}