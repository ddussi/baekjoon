const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
let obj = {};
let a;
let check = 1;
let answer = 0;
for(let i = 1 ; i < input.length ; i++ ){
  check = 1;
  a = input[i][0];
  obj[a] = 1;
  for( j of input[i]){
    if(a===j){
    }else{
      if(!obj[j]){
        obj[j] = 1;
      }else{
        check = 0;
        break;
      }
    }
    a = j
  }
  answer += check;
  obj = {};
}

return answer
} 
console.log(solve());