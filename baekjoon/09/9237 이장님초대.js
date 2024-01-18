const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const list = input.slice(1).sort((x,y) => y-x);
  let n = 1;
  for(let i = 0 ; i<list.length ; i++){
    if(n < i+2+list[i]){
      n = i+2+list[i];
    }
  }
  return n
}

console.log(solve());