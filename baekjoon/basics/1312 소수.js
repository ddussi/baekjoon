const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  let [a, b, n] = input
  let result = a % b;

  for(let i = 0; i < n-1; i++){
      result *= 10;
      result %= b;
  };
  
  result *= 10;
  return Math.floor(result/b)
}

console.log(solve());