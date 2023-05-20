const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
let num = input[0];
const list = [];
let x = 665;
while(list.length<num){
    x++;
    if(String(x).includes('666')){
        list.push(x);
    }
}
return list[num-1];
}
console.log(solve());

/* 
숫자를 문자열로 바꿔서 문자열안에 666이 있는 경우만 체크해서 배열에 넣는다.
*/