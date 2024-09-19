const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const [A, B] = input;
  return A * (B - 1) + 1;
}

console.log(solve());