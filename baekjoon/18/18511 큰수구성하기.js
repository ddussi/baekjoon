const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => x.split(" "));
const arr = [];
let answer = 0;
function solve() {
  let [N, K] = input[0].map((el) => +el);
  const set = input[1].map((el) => +el);
  for (let i = 1; i <= String(N).length; i++) dfs(0, i, N, K, set);
  return answer;
}
function dfs(depth, length, N, K, set) {
  if (depth === length) {
    let cand = 0;

    for (const num of arr) {
      cand += num;
      cand *= 10;
    }
    cand /= 10;

    if (N >= cand) answer = Math.max(answer, cand);

    return;
  }
  for (let i = 0; i < K; i++) {
    arr.push(set[i]);
    dfs(depth + 1, length, N, K, set);
    arr.pop();
  }
}

console.log(solve());
