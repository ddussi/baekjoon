const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const T = Number(input[0]);
    let dp = Array.from(Array(31), () => Array(31).fill(0));

    for (let i = 1; i <= 30; i++) {
        dp[i][0] = 1;
        dp[i][i] = 1;
    }

    for (let i = 2; i <= 30; i++) {
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    let answer = "";
    for (let i = 1; i <= T; i++) {
        const [N, M] = input[i].split(" ").map(Number);
        answer += dp[M][N] + "\n";
    }

    return answer.trim();
}

console.log(solve());