const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const text = "LoveisKoreaUniversity";
  const answer = [];
  for (let i = 0; i < input[0]; i++) {
    answer.push(text);
  }
  return answer.join(" ");
}

console.log(solve());