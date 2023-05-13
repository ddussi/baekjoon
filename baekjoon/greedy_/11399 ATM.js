const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let n = input[0];
    let list = input.slice(1).sort((a,b) => {return a-b});
    let time = 0;
    let answer = 0;
    for(let i =0 ; i<n ; i++){
        time += list[i];
        answer += time;
    }
    return answer;
} 
console.log(solve());