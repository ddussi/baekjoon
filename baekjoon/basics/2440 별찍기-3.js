const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let n = input[0];
  const arr = [];
  for(let i = n ; i>0;i--){
    arr.push("*".repeat(i));
  }
  return arr.join("\n")
}
console.log(solve());