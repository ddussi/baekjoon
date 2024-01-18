const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let n = input[0];
  const list = input.slice(1,n+1);
  let arr = input.slice(n+1);
  let answer = 0; 
  for(let i of list){
    let n = 0;
    i-=arr[0];
    n++;
    if(i>0){
      n+=Math.ceil(i/arr[1]);
    }  
    answer+= n;
  }
  return answer
}
console.log(solve());