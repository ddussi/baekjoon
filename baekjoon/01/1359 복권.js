const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let [n, m, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number); 
function solve() {
    let winCount = 0;
    for (let i = k; i <= m; i++) {
        winCount += combination(m, i) * combination(n - m, m - i);
    }
    return (winCount / combination(n, m)).toFixed(12);
}

function combination(n, r) {
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < r; i++) {
        numerator *= n - i;
        denominator *= i + 1;
    }
    return numerator / denominator;
}

console.log(solve());