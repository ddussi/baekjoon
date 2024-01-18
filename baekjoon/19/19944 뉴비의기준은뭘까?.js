const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
  let num = input[0];
  let target = input[1];
  if(target<=2){
    return "NEWBIE!"
  }else if(target<=num){
    return "OLDBIE!"
  }
  return "TLE!"
} 
console.log(solve());