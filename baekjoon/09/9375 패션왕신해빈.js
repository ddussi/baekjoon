const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const test_case = parseInt(input.shift());
  let answer = "";

  for (let i = 0; i < test_case; i++) {
    const clothes_num = parseInt(input.shift());
    let clothes = {};
    for (let j = 0; j < clothes_num; j++) {
      const cloth_type = input.shift().split(" ")[1];
      if (cloth_type in clothes) {
        clothes[cloth_type]++;
      } else {
        clothes[cloth_type] = 1;
      }
    }
    let total = 1;
    for (let cloth in clothes) {
      total *= clothes[cloth] + 1;
    }
    answer += total - 1 + "\n";
  }
  return answer;
}

console.log(solve());