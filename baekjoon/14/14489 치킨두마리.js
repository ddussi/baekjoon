const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  const money = input[0] + input[1];
  const price = input[2]*2;
  if(money>=price){
    return money-price;
  }else{
    return money;
  }
} 
console.log(solve());