const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
  const N = Number(input[0]);
  const cards = input[1].split(' ').map(Number);
  const M = Number(input[2]);
  const numbers = input[3].split(' ').map(Number);

  const cardMap = {};
  for (let i = 0; i < N; i++) {
    cardMap[cards[i]] = 1;
  }

  let result = '';
  for (let i = 0; i < M; i++) {
    result += `${cardMap[numbers[i]] || 0} `;
  }

  return result.trim();
}

console.log(solve());