const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solve(a, b) {
  let finalDefense = a - (a * b / 100);
  return finalDefense < 100 ? 1 : 0;
}

console.log(solve(a, b));