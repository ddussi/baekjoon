const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  const [x, y] = input[0].split(' ').map(Number);
  const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let totalDays = y;
  for (let i = 0; i < x; i++) {
    totalDays += days[i];
  }

  return week[totalDays % 7];
}

console.log(solve());