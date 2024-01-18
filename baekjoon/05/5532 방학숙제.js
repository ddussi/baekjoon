const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function solve() {
  while (true) {
    input[0]--;
    input[1] -= input[3];
    input[2] -= input[4];
    if (input[1] <= 0 && input[2] <= 0) break;
  }
  
  return input[0];
}

console.log(solve());