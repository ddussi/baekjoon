const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const n = input[0];
    const list = input.slice(1);
    const answer = [];
    const arr = [];
    for (let i = n - 1; i >= 0; i--) {
      const x = list[i];
      while (arr.length > 0 && arr[arr.length - 1] <= x) {
        arr.pop();
      }
      if (arr.length > 0) {
        answer[i] = arr[arr.length - 1];
      } else {
        answer[i] = -1;
      }
      arr.push(x);
    }
  
    return answer.join(' ');
  }
  
  console.log(solve());

//배열 arr을 사용하여 이전에 확인한 수를 저장. 배열에는 현재까지 가장 큰 수가 맨 위에 위치하도록 유지
//for 루프를 역순으로 진행하여 list의 끝에서부터 시작하도록