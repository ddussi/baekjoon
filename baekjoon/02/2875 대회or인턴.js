const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let N = input[0];
  let M = input[1];
  let K = input[2];
  while(K>0){
    if((M*2)>=N){
      M-=1;
    }else{
      N-=1;
    }
    K-=1;
  }
  return Math.min(Math.floor(N/2),M);
}
console.log(solve());