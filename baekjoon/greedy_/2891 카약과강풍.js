const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let n = input[1];
  const xList = input.slice(3,3+input[1]).sort((x,y)=>x-y);
  const yList = input.slice(3+input[1],3+input[1]+input[2]);
  const obj = {};
  const newList = [];
  for(let i of yList){
    obj[i] = 1;
  }
  for(let i of xList){
    if(obj[i]===1){
      obj[i]=0;
      n--;
    }else{
      newList.push(i)
    }
  }
  for(let i of newList){
    if(obj[i-1]===1){
      obj[i-1]=0;
      n--;
    }else if(obj[i+1]===1){
      obj[i+1]=0;
      n--;
    }
  }
  return n
}
console.log(solve());