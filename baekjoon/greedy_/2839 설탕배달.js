const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let num = input[0]
    let answer = 0;
    while (num >= 3) {
        if (num % 5 === 0) {
            return num / 5 + answer;
        } else if(num === 3){
            return 1+answer;
        }else {
            answer += 1;
            num = num - 3;
        }
    }
    return -1;
}
console.log(solve())

/*
불가능할 때
어떤경우? -> 값이 4거나, 값이 5이상일 때 인수가 3와 5로 나눠지 않는 경우.
1. 입력값을 5로 나눈다 
1-1. 나눠짐 - > 5로 나눈 값과 num 값을 더해서 출력
1-1-1. 만약 값이 3이면 num값과 +1해서 출력 
1-2.안나눠짐 - > 3을 빼고 num += 1 하고 다시 1로 돌아감
1-2-1 값이 3미만으로 떨어지면 -1 출력
*/
