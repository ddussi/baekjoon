const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const testCases = input.slice(1);
  const results = [];

  for (const n of testCases) {
    const pairs = [];

    for (let i = 1; i < n; i++) {
      const j = n - i;
      if (i < j) {
        pairs.push([i, j]);
      }
    }

    if (pairs.length > 0) {
      results.push(`Pairs for ${n}: ${pairs.map(pair => pair.join(" ")).join(", ")}`);
    } else {
      results.push(`Pairs for ${n}:`);
    }
  }

  return results.join("\n");
}

console.log(solve());