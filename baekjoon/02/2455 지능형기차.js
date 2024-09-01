const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  let max = 0;
  let num = 0;
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      num -= input[i];
    }
    if (i % 2 === 1) {
      num += input[i];
    }
    if (max < num) {
      max = num;
    }
  }
  return max;
}

console.log(solve());