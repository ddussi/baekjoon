const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const list = [];
    for(let i = input[0] ; i > 0 ; i--){
        list.push(i);
    }
    const answer = [];
    let n = 0;
    while(list.length){
        if(n%2===0){
            answer.push(list.pop());
        }else{
            list.unshift(list.pop());
        }
        n++
    }
    return answer.join(" ")
}
console.log(solve());