const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const sortedList = input.slice(1).sort((a, b) => b - a);
  return sortedList.join('\n');
}

console.log(solve());