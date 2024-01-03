const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const triangle = input.slice(1).map((line) => line.split(' ').map((e) => Number(e)));

function solve() {
    const dp = [...triangle];
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                dp[i][j] += dp[i - 1][j];
            } else if (j === i) {
                dp[i][j] += dp[i - 1][j - 1];
            } else {
                dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
            }
        }
    }
    return Math.max(...dp[n - 1]);
}

console.log(solve());