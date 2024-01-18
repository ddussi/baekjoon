const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let n = input[0]; //테스트 수
    const list = input.slice(1); 
    const arr = [];
    for(let i = 0; i<n*2 ; i+=2){
    const newList = list[i+1].split(" ").map(Number); // 케이스별 주가
    let max = 0; 
    let total = 0;
    for(let j = newList.length-1; j>=0 ; j--){ // 주가를 뒤로 돌면서 최대값을 찾고
        if(max<newList[j]){ // 만약 해당 숫자가 현재 최댓값랑 비교해서 더 큰 값이면
            max = newList[j]; // 해당 값을 최댓값으로 저장해 놓고
        }else if(max>newList[j]){ // 현재 최댓값보다 작은 값이 나오면
            total += max-newList[j]; // 차이를 총 이득에 더해준다.
        }
    }
    arr.push(total); // 주가를 다 돌고 한 케이스의 이익을 저장
    }
    return arr.join('\n');
}
console.log(solve());