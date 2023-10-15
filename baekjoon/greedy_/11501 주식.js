const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let n = input[0];
    const list = input.slice(1); 
    const arr = [];
    for(let i = 0; i<n*2 ; i+=2){
    const newList = list[i+1].split(" ").map(Number);
    let max = 0;
    let total = 0;
    for(let j = newList.length-1; j>=0 ; j--){
        if(max<newList[j]){
            max = newList[j];
        }else if(max>newList[j]){
            total += max-newList[j];
        }
    }
    arr.push(total);
    }
    return arr.join('\n');
}
console.log(solve());