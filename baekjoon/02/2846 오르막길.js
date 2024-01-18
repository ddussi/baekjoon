const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  const arr = input.slice(1);
  arr.push(0);
  let k = arr[0];
  const answer = [];
  let n = 0;
  for(let i = 1 ; i<arr.length ; i++){
    if(arr[i]>k){
      n += arr[i]-k;
    }else{
      answer.push(n);
      n = 0;
    }
    k = arr[i];
  }
  return Math.max(...answer)
} 
console.log(solve());