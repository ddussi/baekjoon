const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let x = input[0]
  const arr = [2,4,8,16,32]
  return arr[x-1]
}
console.log(solve());
