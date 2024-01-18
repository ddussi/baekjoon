const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
  const arr = input.slice(1)
  const list = arr.map((x) => x.split(" ").map(Number));
  const answer = [];
  for(let i = 0 ; i<list.length ; i++){
  list[i].sort((a,b)=>b-a)
  answer.push(list[i][2]);
}
return answer.join("\n")
} 
console.log(solve());