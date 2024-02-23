const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const [N, M] = input[0].split(' ').map(Number);
  let baskets = Array(N).fill(0);

  for (let i = 1; i <= M; i++) {
    const [L, R, K] = input[i].split(' ').map(Number);
    for (let j = L - 1; j < R; j++) {
      baskets[j] = K;
    }
  }

  return baskets.join(' ');
}

console.log(solve());