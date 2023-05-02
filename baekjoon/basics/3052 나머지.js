const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy = input.slice();
let arr = {};
for(let i = 0; i < 10 ; i++){
    arr[copy[i]%42] === undefined ? arr[copy[i]%42] = 1 : arr[copy[i]%42] += 1;
}
console.log(Object.keys(arr).length);
