const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split(/\s/).map(Number)[0];
function solve() {
    let dp = new Array(input + 1).fill(Infinity);
    dp[0] = 0; 

    for(let i = 1; i <= input; i++) { 
        for(let j = 1; j*j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1); 
        }
    }

    return dp[input];
}
console.log(solve());