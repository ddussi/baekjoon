const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let n = 0;
  const arr = [];
  for(let i = 0 ; i < input.length;i++){
    n += input[i];
  }
  arr.push(Math.floor(n/60));
  arr.push(n%60);
  return arr.join("\n")
} 
console.log(solve());
