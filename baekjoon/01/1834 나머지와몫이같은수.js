const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const N = BigInt(input[0]);

  const result = N * (N * N - 1n) / 2n;

  return result.toString();
}

console.log(solve());