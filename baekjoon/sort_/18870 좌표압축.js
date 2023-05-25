const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let num = input[0];
    let arr = input.slice(1);
    let list = input.slice(1);
    arr.sort((a,b)=> b-a);
    let n = 0;
    let start = arr.pop();
    const obj = {};
    obj[start] = n; 
    for(let i = 1 ; i < num ; i++){
        let x = arr.pop()
        if(start === x){
            
        }else{
            n++;
            obj[x] = n;
        }
        start = x;
    }
    newArr = list.map((x)=>obj[x]);
return newArr.join(" ");
}
console.log(solve());

/* 
    배열을 내림차순으로 만들어서 가장 낮은 값이 pop으로 튀어나오게 만듬
    그리고 전이랑 다른 숫자가 pop 되었다면 해당 숫자에 넘버를 부여함
    하지만 같은 숫자가 나온다면 그냥 pop만 함
    이런 식으로 다 부여한 후에
    arr를 map으로 돌려서 숫자를 부여한 넘버로 변환시켜줌
*/