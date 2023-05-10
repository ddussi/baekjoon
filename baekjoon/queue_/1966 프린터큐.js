const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const num = input[0];
    let list = input.slice(1);
    let totalAnswer = 0;
    for (let i = 0; i < num; i++) {
        const num = list[i*2].split(" ").map(Number);
        const arr = list[i*2+1].split(" ").map(Number);
        let answer= 0;
        let targetIndex = num[1];
        let n = 1;
        while(answer === 0){
            
        if(Math.max(...arr) === arr[0]){
            if(targetIndex === 0){
                answer += n;
            }else{
                n++;
                arr.shift();
                targetIndex--;
            }
        }else{
            if(targetIndex === 0){
                targetIndex = arr.length-1;
            }else{
                targetIndex--;
            }
            arr.push(arr.shift());
        }
    }
    totalAnswer = answer
    console.log(totalAnswer);
    }
    return totalAnswer;
} 
solve();

/*
먼저 케이스 숫자만큼 for을 돌리고
    while 문을 돌리면서 answer가 0이면 반복하는 조건으로 돌리고
    num에 초기값 1을 넣고 타겟 인덱스를 변수에 넣는다.
    두번째 배열에서 인덱스[0]를 체크해서 배열 안에서 가장 큰 값이면 shift를 하고 변수 num에 +1을 한다 그리고 타겟인덱스 값에 -1을 한다. 가장 큰 값이 아니라면 shift하고 push로 다시 넣는다  
    이 때 타겟 인덱스를 확인하고 반복할 때마다 -1씩 하다가 인덱스가 0일 때 shift하고 push로 다시 넣는다면 하면 배열의 길이-1을 타겟 인덱스에 넣는다
    만약 가장 앞의 값이 가장 큰 값이고 타겟 인덱스가 0일때 num에 들어있는 값을 answer에 넣으면 while문을 빠져나오면서 출력
*/