const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const n = input[0];
  const points = Math.pow(2 ** n + 1, 2);
  return points;
}

console.log(solve());