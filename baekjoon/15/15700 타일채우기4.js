const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
  const n = BigInt(input[0]);
  const m = BigInt(input[1]);

  const area = n * m;
  return area / 2n;
}

console.log(solve().toString());