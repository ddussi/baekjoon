const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(line => line.split(" ").map(Number));

function solve(input) {
    const n = input[0][0];
    const board = input.slice(1);
    const dp = Array.from(Array(n), () => Array(n).fill(0n));
    dp[0][0] = 1n;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === n - 1 && j === n - 1) break;

            const value = board[i][j];
            if (i + value < n) dp[i + value][j] = dp[i][j] + dp[i + value][j];
            if (j + value < n) dp[i][j + value] = dp[i][j] + dp[i][j + value];
        }
    }

    return dp[n - 1][n - 1].toString();
}

console.log(solve(input));