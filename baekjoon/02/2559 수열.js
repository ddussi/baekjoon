const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solve() {
    const [N, K] = input[0].split(" ").map(Number)
    const list = input[1].split(" ").map(Number);
    let sum = 0;
    for(let i = 0 ; i< K ; i++){
        sum += list[i]
    }
    let answer = sum;
    for(let j = 1 ; j<= N-K ; j++){
        sum = sum-list[j-1]+list[j+K-1];
        answer = Math.max(sum, answer);
    }
    return answer
}

console.log(solve());

