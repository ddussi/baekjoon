const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('').map(Number);
function solve() {
    let n = input.slice();
    n.sort((a, b) => b - a);
    const sum = n.reduce((a, b) => a + b, 0);
    const zeroIncluded = n.includes(0);
    if (sum % 3 !== 0 || !zeroIncluded) {
        return -1;
    } else {
        return n.join('');
    }
}

console.log(solve());