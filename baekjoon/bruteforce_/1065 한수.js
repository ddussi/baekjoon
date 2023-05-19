const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
let num = input[0];
let total = 0;
for (let i = 1; i <= num; i++) {
if(i<10){
total += 1;
}else if(i<100){
    total += 1;
}else if(i<1000){
    let a = Math.floor(i/100);
    let b = Math.floor((i%100)/10);
    let c = i%10;
    if((a-b)===(b-c)){
        total += 1;
    }
}else if(i===1000){
}
}
return total;
}
console.log(solve());

/* 각 자리숫자를 구해서 첫번째 자리 숫자를 다음 자리의 숫자를 뺀 값이 그 다음 자리에도 실행했을 때 같으면 +1
*/