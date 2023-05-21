const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
let x = Number(input[1]);
let y = Number(input[0]);
const list = [];
let answer = 0;
for (let i = 2; i < input.length; i++) {
    list.push(input[i]);
}
const num = [];
for(let n = 0; n <=x-8; n++){
    for(let a = 0; a<=y-8; a++){
        for(let b = a; b<8+a; b++){
            for(let i = n;i<8+n; i++){
                if((b+i)%2===0){
                    if(list[b][i] === "W"){
                    }else{
                        answer++;
                    }
                }else{
                    if(list[b][i] === "B"){
                    }else{
                        answer++;
                    }
                }
            }
        }
        if(answer>64-answer){
            num.push(64-answer);
        }else{
            num.push(answer);
        }
        answer = 0;
    }
}
return Math.min(...num);
}
console.log(solve());

/* 
먼저 0,0 좌표부터 시작해서 8의 길이만큼 반복하는데 
혹시 8의 길이보다 크다면 더 반복할 수 있도록 for반복문을 작성해줍니다.
그리고 나서 8*8판에 B,W가 차례차례 들어가 있는지 확인하기 위해
if문을 행과열을 합쳤을 때 짝수거나 홀수일 경우로 케이스를 나누고
거기서 해당 문자가 만약 홀수가 B라면 ,짝수가 W일 때 변수 answer에 +1을 해주고
8*8을 다 하고 난 후에 어떤 문자를 홀수 짝수에 넣어야 더 적은 경우로 칠할 수 있는지 모르기 때문에 64에 값을 빼서 둘중 작은 값을 구하고 그 값을 num 배열에 push 하기
그리고 만약 8*8보다 더 큰 판이라면 좌표를 이동해서 (0,1)에서 시작한다는 식으로 모든 판 돌아보고 값을 num에 넣기
그리고 나서 num에서 가장 작은 값을 출력
*/