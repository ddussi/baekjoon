const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let n = input[0];
  let min = input[1];
  let num = 0;
  let j = 1;
  for(let i = 1 ; i <= n*2 ; i+=2){
    let a = input[i];
    let b = input[i+1];
    let c = Math.floor((a-1)/(b+1));
    if(b-a === 1){
      return `${j} 2`;
    }else if(min>(c*2)+2){
      min = Math.min((c*2)+2,min)
      num = j
    }
    j++;
  }
  return `${num} ${min}`
} 
console.log(solve());
