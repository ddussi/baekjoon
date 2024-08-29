const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const list = input.slice(1);
  const answer = [];
  for (let i = 0; i < list.length; i++) {
    const [x, y] = list[i].split(" ");
    answer.push(`Case ${i + 1}: ${Number(x) + Number(y)}`)

  }
  return answer.join("\n")
}

console.log(solve());