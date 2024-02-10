const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let dp = Array(101).fill(0);
    dp[1] = dp[2] = dp[3] = 1;
    dp[4] = dp[5] = 2;
    for (let i = 6; i <= 100; i++) {
        dp[i] = dp[i - 1] + dp[i - 5];
    }

    let answer = "";
    for (let i = 1; i < input.length; i++) {
        answer += dp[input[i]] + "\n";
    }

    return answer.trim();
}

console.log(solve());