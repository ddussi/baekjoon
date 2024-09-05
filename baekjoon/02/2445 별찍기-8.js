const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const N = input[0];
  let result = '';

  for (let i = 1; i <= N; i++) {
    result += '*'.repeat(i) + ' '.repeat((N - i) * 2) + '*'.repeat(i) + '\n';
  }

  for (let i = N - 1; i >= 1; i--) {
    result += '*'.repeat(i) + ' '.repeat((N - i) * 2) + '*'.repeat(i) + '\n';
  }

  return result;
}

console.log(solve()); 