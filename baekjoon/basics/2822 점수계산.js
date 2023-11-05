const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const list = input.slice().sort((x,y) => y-x);
    const arr = [];
    for(let i = 0; i<5 ; i++){
        for(let j = 0; j<input.length ; j++){
            if(input[j] === list[i]){
                arr.push(j+1);
            }
        }
    }
    let num = list.slice(0,5).reduce((x,y)=> x+y);
    arr.sort((x,y)=> x-y);
    return `${num}\n${arr.join(" ")}`
}
console.log(solve());
