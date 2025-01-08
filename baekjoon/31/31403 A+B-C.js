const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const [A, B, C] = input;

  const numericResult = A + B - C;

  const stringResult = parseInt(A.toString() + B.toString()) - C;

  return `${numericResult}\n${stringResult}`;
}

console.log(solve());