const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
  let x = parseInt(input[0]);
  const starList = [];
  if (x % 2 === 0) {
    return "I LOVE CBNU"
  }
  starList.push("*".repeat(x));

  let mid = Math.floor(x / 2);

  starList.push(' '.repeat(mid) + '*')

  for (let i = 1; i <= mid; i++) {
    starList.push(' '.repeat(mid - i) + '*' + ' '.repeat(2 * i - 1) + '*')
  }
  return starList.join("\n")

}

console.log(solve());