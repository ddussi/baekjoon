const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
  const r1 = input[0]
  const s = input[1];
  return (2*s)-r1
} 
console.log(solve());