const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
  const list = input.slice(2).map(x=>x.split(""));
  const arr = [];
  for(let i of list){
    arr.push(i.reverse().join(""));
  }
  return arr.join("\n")
} 
console.log(solve());