const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim();

function solve() {
  let current = input;
  const visited = new Set();
  while (true) {
    if (visited.has(current)) {
      return "FA";
    }
    visited.add(current);

    const nextValue = F(current);

    if (nextValue === current) {
      return "FA";
    }
    current = nextValue;

  }
}

function F(x) {
  if (x === "0") {
    return "0";
  }
  const firstDigit = Number(x[0]);
  const length = x.length;
  const result = firstDigit * length;
  return result.toString();
}

console.log(solve());