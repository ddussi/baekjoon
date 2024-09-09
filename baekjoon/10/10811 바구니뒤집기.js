const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const N = input[0];
  const M = input[1];
  let baskets = Array.from({ length: N }, (_, index) => index + 1);

  for (let i = 0; i < M; i++) {
    let start = input[2 + i * 2] - 1;
    let end = input[3 + i * 2] - 1;
    while (start < end) {
      [baskets[start], baskets[end]] = [baskets[end], baskets[start]];
      start++;
      end--;
    }
  }

  return baskets.join(' ');
}

console.log(solve());