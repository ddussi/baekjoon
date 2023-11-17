const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(x=>x.split(" "));
function solve() {
    let numList = input[1].map(Number);
    const list = input.slice(2).map(x=>x.map(Number));
    const answer = [];
    const sumList = Array.from({length: numList.length + 1}, () => 0);
    for(let i = 1; i <= numList.length; i++) {
        sumList[i] = sumList[i - 1] + numList[i - 1]; // 이전 누적합에 현재 값을 더함
    }

    for(let i = 0 ; i < list.length ; i++){
        // 구간합 계산: [i, j] 구간의 합은 sumList[j] - sumList[i - 1]
        let sum = sumList[list[i][1]] - sumList[list[i][0] - 1];
        answer.push(sum)
    }
    return answer.join("\n")
}
console.log(solve());