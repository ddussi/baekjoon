const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let copy = input.slice();
let num = (copy[0]*copy[1]*copy[2]).toString()
let arr = new Array(10).fill(0)
for(let i = 0 ; i <10; i++){
    arr[num[i]] += 1 
}
console.log(arr.join("\n"));