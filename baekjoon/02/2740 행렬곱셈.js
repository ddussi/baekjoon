const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(" ").map(Number);
  const K = Number(input[N + 1].split(" ")[1]);

  let A = [];
  for (let i = 1; i <= N; i++) {
    A.push(input[i].split(" ").map(Number));
  }

  let B = [];
  for (let i = N + 2; i < input.length; i++) {
    B.push(input[i].split(" ").map(Number));
  }

  let result = Array.from(Array(N), () => Array(K).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      for (let t = 0; t < M; t++) {
        result[i][j] += A[i][t] * B[t][j];
      }
    }
  }

  return result.map(row => row.join(" ")).join("\n");
}

console.log(solve());
