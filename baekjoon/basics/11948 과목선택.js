const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let x = input.slice(0,4).sort((x,y) => y-x);
  let y = input.slice(4).sort((x,y) => y-x);;
  
  return x[0]+x[1]+x[2]+y[0]
} 
console.log(solve());
