const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [N, M] = input[0].split(" ").map(Number);
    let arr = input.slice(1).map(row => row.split("").map(Number));

    let maxSide = 1;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = maxSide; k < Math.min(N - i, M - j); k++) {
                if (arr[i][j] === arr[i + k][j] && arr[i][j] === arr[i][j + k] && arr[i][j] === arr[i + k][j + k]) {
                    maxSide = Math.max(maxSide, k + 1);
                }
            }
        }
    }

    return maxSide * maxSide;
}
console.log(solve());