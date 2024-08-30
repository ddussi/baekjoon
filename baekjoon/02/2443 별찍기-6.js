const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const N = parseInt(input[0]);
  let result = '';

  for (let i = 0; i < N; i++) {
    result += ' '.repeat(i);
    result += '*'.repeat(2 * (N - i) - 1);
    if (i < N - 1) {
      result += '\n';
    }
  }

  return result;
}

console.log(solve());