const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let x = input[0];
    let y = input[1];
    const list = input.slice(2);
    let cnt = Math.abs(x-100); // 다 상하 버튼으로 이동했을 때 횟수
    for(let i = 0; i<1000000; i++){ // 체널이 무한대이기 때문에 그 범위가 위에서부터 시작하는게 빠를 수 있으므로 1,000,000까지 해야함
        let check = true; // 해당 숫자에 고장난 버튼이 존재하는지 확인하는 변수
        for(let j of i.toString()){ // 해당 숫자의 숫자를 하나씩 확인
            if(list.includes(Number(j))){ // 고장난 변수가 존재하는지 확인
                check = false; // 그럼 숫자를 만들 수 없기 때문에 변수에 false값 넣고 끝냄 
                break;
            }
        }
        if(check){ // 만약 i가 리모콘으로 만들 수 있다면
            cnt = Math.min(cnt, (i.toString().length+Math.abs(x-i))) // 지금까지의 cnt값과 (해당 숫자 버튼을 눌렀을 때의 길이와 목표 숫자의 차이만큼의 상하 버튼의 횟수의 합)을 비교해서 작은 값을 넣어줌 
        }
    }
    return cnt
}
console.log(solve());
