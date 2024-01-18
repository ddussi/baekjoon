const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
const dough_price = input[1];
const topping_price = input[2];
const dough = input[3];
const topping = input.slice(4);
let answer = 0;
topping.sort((a,b)=>b-a);
answer = dough/dough_price;
let x = dough
for(let i = 0; i<topping.length; i++){
    x += topping[i];
    let y = dough_price+(topping_price*(i+1));
    let newAnswer = x/y
    if(answer<newAnswer){
        answer = newAnswer;
    }else{
        return Math.floor(answer);
    }
}
return Math.floor(answer);
}
console.log(solve());

/* 
가장 비싼 토핑순으로 정렬한 뒤
도우만 있을 때 1원 당 칼로리를 계산하고
다음 토핑을 추가핧 때 만약 1원 당 칼로리가 추가하지 않았을 때 보다 낮아진다면 추가하지 않고 그 전 토핑까지만 추가하고 리턴
*/