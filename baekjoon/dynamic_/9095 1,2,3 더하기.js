const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
  const n = input[0];
  const list = input.slice(1);
  const answer = [];

  for (const key of list) {
    const num = [1, 2, 4 ]; // 초기 세 개의 수는 1, 2, 4로 설정
    if (key <= 3) {
      answer.push(num[key - 1]);
    } else {
      for (let i = 3; i <= key - 1; i++) {
        num.push(num[i - 1] + num[i - 2] + num[i - 3]); // 세 개의 수를 더한 값으로 계산
      }
      answer.push(num[num.length - 1]);
    }
  }

  return answer.join('\n');
}

console.log(solve());

/* 규칙을 살펴보면 1: 1 2: 2 3: 4 4: 7 5: 13 으로 쭉죽 이어나가다보면 해당 정수 i의 값은 (i-1)+(i-2)+(i-3)와 같다 이는 피보나치 수와 비슷하며
해당 규칙을 이용해서 단순하게 풀어보면 위의 코드와 같다.
다이나믹 프로그래밍으로 푼건 아니지만 범위가 작기 때문에 충분히 풀 수 있다.
*/