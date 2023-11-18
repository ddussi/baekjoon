const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => x.split(" "));

function solve() {
  const list = input.slice(1);
  const arr = [];

  function fibonacci(n) {
    const memo = [0, 1]; // 초기값 설정
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i - 1] + memo[i - 2]; // 이전 값들을 더해나감
    }
    return memo;
  }

  for (let i of list) {
    const memo = fibonacci(parseInt(i));
    if(parseInt(i) === 0){// 0일 때만 "1 0" 출력
        arr.push("1 0")
    }else{
        arr.push(`${memo[memo.length - 2]} ${memo[memo.length - 1]}`);
    }
  }

  return arr.join("\n");
}

console.log(solve());