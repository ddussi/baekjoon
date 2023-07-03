const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
  const answer = []; // 결과를 저장할 배열
  const primeNums = []; // 소수를 저장할 배열
  const nums = Array(1000000 + 1).fill(true); // 소수 여부를 체크할 배열 (인덱스 0부터 1000000까지)

  nums[0] = false; // 0은 소수가 아님
  nums[1] = false; // 1은 소수가 아님

  // 에라토스테네스의 체를 사용하여 소수를 구함
  for (let i = 2; i <= Math.sqrt(1000000); i++) {
    if (!nums[i]) {
      continue;
    }
    primeNums.push(i); // 소수인 경우 primeNums 배열에 추가
    for (let j = i * 2; j <= 1000000; j += i) {
      nums[j] = false; // 소수의 배수들은 소수가 아님으로 표시
    }
  }

  // 입력된 짝수에 대해 골드바흐의 추측을 검증하고 결과를 answer 배열에 저장
  input.slice(0, -1).map(num => {
    const low = primeNums.find(primeNum => nums[num - primeNum]); // 작은 홀수 소수 찾기
    if (low) {
      const high = num - low; // 큰 홀수 소수 계산
      answer.push(`${num} = ${low} + ${high}`); // 결과 문자열을 answer 배열에 추가
    } else {
      answer.push("Goldbach's conjecture is wrong."); // 골드바흐의 추측이 틀렸을 경우 추가
    }
  });

  return answer.join('\n'); // 결과 배열을 개행 문자로 연결하여 반환
}

console.log(solve());
