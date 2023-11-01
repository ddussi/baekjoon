const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let snake = input[1];
    const list = input.slice(2).sort((x,y)=> x-y);
    let n = 0;
    for(let i = 0; i<list.length ; i++){
        if(list[i]>snake+i){
            return n+snake
        }
        n++
    }
    return n+snake
}

console.log(solve());