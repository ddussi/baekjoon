const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    const n = input[0]
    const list = input.slice(2);
    let answer = 0
    for(let i of list){
        if(i === n){
            answer++;
        }
    }
    return answer;
}
console.log(solve());