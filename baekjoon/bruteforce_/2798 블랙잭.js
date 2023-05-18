const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
let num = input[0];
let max = input[1];
const list = input.slice(2).sort((a,b) => b-a);
let x= 0;
let [num1,num2,num3] =[0,0,0]
const arr = [];
for (let i = 0; i < num; i++) {
  num1 = list[i];
  for(let j = i+1; j<num; j++){
      num2 = list[j]
    for(let k =j+1;k<num ; k++){
        num3 = list[k]
      if((num1+num2+num3) <= max){
        arr.push(num1+num2+num3);
      }
    }
  }
}
  return Math.max(...arr);
}
console.log(solve());

/* 합이 큰 수부터 검사해서 만약 넘는다면 작은 수로 교체하는 형식으로 하기 위해 정렬을 내림차 순으로 하고 반복문을 돌린다.
*/