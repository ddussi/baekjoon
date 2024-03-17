const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
  let str = input[0];
  const croatiaAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  croatiaAlphabets.forEach((alphabet) => {
    str = str.split(alphabet).join('A');
  });

  return str.length;
}

console.log(solve());
