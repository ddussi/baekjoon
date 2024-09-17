const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const list = input.slice(1);
  const total = list.reduce((x, y) => x + y)
  const answer = total - Math.max(...list)
  return answer
}

console.log(solve());