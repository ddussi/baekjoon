const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
  const list = input.slice(2);
  const [a, b] = input.slice(0, 2).map(Number);
  let n = 0;
  for (let i = 0; i < b; i++) {
    n = 0;
    for (let j = 0; j < a; j++) {
      let item = list[j][i]
      if (item === "O") {
        break;
      }
      n = n + 1
    }
    if (n === a) {
      return i + 1
    }
  }
  return "ESCAPE FAILED"
}
console.log(solve());
