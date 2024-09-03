const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const R = input[0];
  const euclideanArea = (Math.PI * R * R).toFixed(6);
  const taxiArea = (2 * R * R).toFixed(6);

  return `${euclideanArea}\n${taxiArea}`;
}


console.log(solve()); 