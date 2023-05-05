const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let num = input[0]
    let list = input.slice(1);
    let answer = 0;
    for(let i = 0; i < list.length ; i++){
        let arr = [];
        if(list[i]===1){
            arr.push(1);
        }
        if(list[i]===2){
            answer += 1;
        }
        while (list[i]%2===0) {
            list[i] /= 2;
            arr.push(2);
        }
        for(let j = 3; j*j<=list[i]; j+=2 ){
            if(list[i]%j===0){
                list[i]/=j;
                arr.push(j);
            }
        }
        if(arr.length === 0)
        {
            answer += 1;
        }
    }
    return answer;
}
console.log(solve())

/*
1. 리스트 중 n을 뽑아서 소수인지 확인한다 이 때 n이 1이면 소수가 아님 또는 2면 소수라는 조건을 만든다.
1-1. 합계라는 변수와 빈 배열을 하나 만들고 n을 for문을 돌려서 2로 최대한 나누고 2로 나누고 나눠 떨어질 때마다 2를 배열에 추가 한다.
1-2. 2로 최대한 나눈 값을 3부터 루트n값까지 돌려서 나눠 떨어지면 그 해당 i 값을 배열에 추가한다
1-3  그리고난 후 배열의 길이가 0이라면 소수이므로 합계에 1을 더한다
2. 1을 반복하여 모든 수들을 확인하고 합계를 출력
*/