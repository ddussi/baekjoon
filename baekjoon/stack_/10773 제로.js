const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let num = input[0];
    const list = input.slice(1);
    const arr = [];
    let answer = 0;
    for(let i = 0; i<num ; i++){
        if(list[i]===0){
            arr.pop();
        }else{
            arr.push(list[i]);
        }
    }
    for(x of arr){
        answer += x;        
    }
    return answer;
}
console.log(solve())
