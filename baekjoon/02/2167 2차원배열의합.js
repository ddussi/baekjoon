const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [N, M] = input[0].split(" ").map(Number);
    let arr = Array.from(Array(N), () => Array(M).fill(0));
    let dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

    for (let i = 0; i < N; i++) {
        arr[i] = input[i + 1].split(" ").map(Number);
    }

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + arr[i - 1][j - 1];
        }
    }

    let K = Number(input[N + 1]);
    let result = "";

    for (let k = 0; k < K; k++) {
        let [i, j, x, y] = input[N + k + 2].split(" ").map(Number);
        result += (dp[x][y] - dp[i - 1][y] - dp[x][j - 1] + dp[i - 1][j - 1]) + "\n";
    }
    return result.trim();
}

console.log(solve());