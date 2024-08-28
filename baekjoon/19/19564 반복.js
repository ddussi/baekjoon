const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
  const word = input[0];
  let cnt = 1;
  for (let i = 0; i < word.length - 1; i++) {
    if (word.charCodeAt(i) >= word.charCodeAt(i + 1)) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solve());