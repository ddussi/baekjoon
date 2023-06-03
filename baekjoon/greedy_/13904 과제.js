const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const num = Number(input[0]);
    const list = input.slice(1).map((x)=> x.split(" ").map(Number));
    list.sort((x,y)=> y[1]-x[1]);
    let answer = 0;
    const obj = {};
    for(let i = 0; i<num ; i++){
        for(let j = 0; j<list[i][0] ; j++){
            let n = list[i][0]-j
                if(n in obj === false){
                    obj[n] = 1;
                    answer += list[i][1];
                    break;
                }
        }
    }
return answer;
}
console.log(solve());
/* 먼저 값이 점수가 가장 높은 순서대로 정렬을 한 다음에
값이 가장 높은 과제를 최대한 늦게 시작한다. 
그러기 위해서 실행할 때 마다 값의 과제의 날짜를 객체에 넣고 만약에 그 날짜가 객체 안에 있다면 -1을 하는 식으로 반복하다가
1까지 봤을 때 다 있다면 그냥 패스하고 다음 과제로 넘어간다.
*/