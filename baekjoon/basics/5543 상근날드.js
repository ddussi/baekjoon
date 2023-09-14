const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  
  const burger = [];
  const beverage = [];
  for(let i = 0 ; i < 3;i++){
    burger.push(input[i]);
  }
  for(let i = 3 ; i < 5;i++){
    beverage.push(input[i]);
  }
  return Math.min(...burger)+Math.min(...beverage)-50
} 
console.log(solve());