const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const textList = input.slice(1);
  const set = new Set();
  const standard = textList[0];
  for (let text of textList) {
    for (let i = 0; i < standard.length; i++) {
      if (text[i] !== standard[i]) {
        set.add(i)
      }
    }
  }
  const strArray = standard.split("")
  for (let i of set) {
    strArray[i] = "?"
  }

  return strArray.join("")
}

console.log(solve());