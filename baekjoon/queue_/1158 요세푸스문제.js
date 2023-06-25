const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const x = input[0] // 총 사람의 숫자
    let y = input[1] // 제거해야 하는 텀
    let arr = [] // 빼야 할 인원을 담는 배열
    const answer = [] // 뺀 인원을 담는 배열
    for (let i = 1; i <= x; i++) { // 인원 배열 생성
        arr.push(i)

    }
    let index = 0; // 현재 인덱스
    while (arr.length > 0) { // 빼야 할 인원이 없을 때까지
        index = (index + y - 1) % arr.length; // 다음 뺄 인원의 인덱스 계산
        answer.push(arr[index]); // 인원 제거
        arr.splice(index, 1); // 제거된 인원 삭제
    }
    return `<${answer.join(", ")}>`
}

console.log(solve());
