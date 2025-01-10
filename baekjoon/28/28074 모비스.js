const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const TEXT = "MOBIS"
  for (let i of TEXT) {
    if (input[0].includes(i)) {
      continue;
    } else {
      return "NO"
    }
  }
  return "YES"
}

console.log(solve());