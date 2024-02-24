const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  let max = -1;
  let maxRow = 0;
  let maxCol = 0;

  for (let i = 0; i < 9; i++) {
    const numbers = input[i].split(' ').map(Number);
    for (let j = 0; j < 9; j++) {
      if (numbers[j] > max) {
        max = numbers[j];
        maxRow = i + 1;
        maxCol = j + 1;
      }
    }
  }

  return `${max}\n${maxRow} ${maxCol}`;
}

console.log(solve());
