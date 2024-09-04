const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const list = input.slice(1);
  const total = input.slice(1).reduce((x, y) => x + y);
  return total - Math.max(...list)
}

console.log(solve()); 