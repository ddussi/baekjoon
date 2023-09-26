const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  const d = input[0]*2;
  const r = input[1]*2*3.141592;
  return d+r
} 
console.log(solve());