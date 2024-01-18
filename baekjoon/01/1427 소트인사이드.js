const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    let str = input[0];
    const arr = [];
for(let i = 0; i<str.length ; i++){
    arr.push(str[i]);
}
arr.map(Number);
arr.sort((a,b) => b-a);
return arr.join("");
}
console.log(solve());