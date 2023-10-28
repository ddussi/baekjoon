const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const n = input[0]
    const list = input.slice(1)
    const answer = [];
    for(let i of list){
        if(i===n){
            answer.push(1);
        }
    }
    return answer.length
}
console.log(solve());
