const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let S = Number(fs.readFileSync(filePath).toString().trim());

function solve() {
    let N = 0;
    let sum = 0;

    while (true) {
        N++;
        sum += N;
    
        if (sum > S) {
            N--;
            break;
        }
    }

    return N;
}

console.log(solve());