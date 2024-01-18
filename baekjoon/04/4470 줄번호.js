const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
  const list = input.slice(1);
  const arr = [];
  for(let i = 0; i<list.length; i++){
    arr.push((`${i+1}. `).concat(list[i]))
  }
  return arr.join("\n")
} 
console.log(solve());