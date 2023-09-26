const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(BigInt);
function solve() {
  const num = [1n,1n];
for(let i = 2 ; i< input ; i++){
  num.push(num[i-2]+num[i-1]);
}
const list = [4n,6n,10n]
for(let i = 3 ; i< input ; i++){
  list.push(num[i-3]+2n*num[i-2]+2n*num[i-1]+3n*num[i])
}

return list[input-1].toString()
} 
console.log(solve());