const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const arr = input.slice();
    let j = 0
    let answer = "";
    let totalanswer = [];
    while (arr[j]!=="0") {
        const n = arr[j].length
        for(let i = 0; i<Math.ceil(n) ; i++){
            if(arr[j][i] !== arr[j][n-i-1]){
                answer = "no";
                break;
            }
            answer = "yes";
        }
        totalanswer.push(answer)
        j++;
    }
    return totalanswer.join("\n");
} 
console.log(solve());

/*
배열이 값이 "0"일 때 멈추는 while문을 쓰고
    배열의 길이를 변수 n에 저장하고
    for문을 돌려서 Math.ceil(n/2)의 횟수만큼 돌리고
    i를 인덱스로 잡아서 (길이-i-1)인덱스값과 같은지 비교하고 맞으면 반복
    틀리면 바로 no출력 하고 for문 빠져나오기
*/