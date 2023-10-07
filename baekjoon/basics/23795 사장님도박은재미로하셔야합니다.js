const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(BigInt);
function solve() {
  let n = 0n;
  for(let i = 0; i<input.length-1 ; i++){
    n +=input[i];
  }
  return n.toString();
}
console.log(solve());