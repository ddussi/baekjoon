const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
function solve() {
    let answer = "";
    num = input.shift();
    const arr = [];
    const arr2 = [];
     for(let i = num; i>0; i--){
        arr.push(i);
     }
    let x= 0;
    while(x<num*2) {
        if(arr2[arr2.length-1]===input[0]){
            arr2.pop();
            input.shift();
            answer += "-\n";
        } else{
            arr2.push(arr.pop());
            answer += "+\n";
        }
        x++;
    }
    if(arr2.length === 0){
        return answer;
    }else{
        return "NO"
    }
}
console.log(solve())

/*
처음 n개를 n부터 1까지 순서대로 push하다가 해당 숫자가 맞으면 pop연산을 한다. 이 때 pop연산을 먼저 실행해서 연속으로 뽑는 경우도 찾는다.
*/