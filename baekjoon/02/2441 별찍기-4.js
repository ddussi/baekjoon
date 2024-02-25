const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const N = Number(input[0]);
  let result = '';

  for (let i = 0; i < N; i++) {
    result += ' '.repeat(i) + '*'.repeat(N - i) + '\n';
  }

  return result.trim();
}

console.log(solve());