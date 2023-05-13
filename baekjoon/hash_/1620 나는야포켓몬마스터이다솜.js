const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let n = Number(input[0].split(" ")[0]);
    let k = Number(input[0].split(" ")[1]);
    let listNum = {};
    let listName = {};
    const answer = [];
    for(let i = 1; i<=n ; i++){
        let x = input[i]
        listNum[x] = i;
    }
    for(let i = 1; i<=n ; i++){
        let y = input[i]
        listName[i] = y;
    }
    for(let i = n+1; i <k+n+1; i++){
        if(isNaN(input[i])){
            answer.push(listNum[input[i]]);
        }else{
            answer.push(listName[input[i]])
        }
    }
    return answer.join("\n");
} 
console.log(solve());

/* 17219번 비밀번호 찾기를 이름 : 번호 , 번호 : 이름 이렇게 배열 2개로 만들어서
입력되는 값이 숫자인지 문자열인지 확인 후 배열을 골라서 출력
*/