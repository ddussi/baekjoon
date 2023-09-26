const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
const le = input[0];
const list = input.slice(2);
list.push(le);
const answer = [];
let n = 0;
for(let i = 0; i<list.length ; i++){
  if(i === 0){
    answer.push(list[i]-n);
  }else if(i === list.length-1){
    answer.push(le-list[i-1]);
  }else{
    answer.push(Math.ceil((list[i]-list[i-1])/2))
  }
}
return Math.max(...answer)
} 
console.log(solve());