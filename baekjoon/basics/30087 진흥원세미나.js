const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
  let n = input[0]
  const answer = [];
  let li = input.slice(1)
  const list = {"Algorithm": "204", "DataAnalysis":"207", "ArtificialIntelligence": "302", "CyberSecurity": "B101", "Network": "303", "Startup":"501", "TestStrategy": "105"}
  for(let i =0; i<n; i++){
    let l = li[i]
    answer.push(list[l])
  }
  return answer.join("\n")
} 
console.log(solve());