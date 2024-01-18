const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
function solve() {  
    let num = input.slice()[0];
    let answer = 0;
    while (num%5!==0) {
        if(num===1 || num===3){
            return -1
        }
        num-=2;
        answer++;
    }
    return answer+num/5
}
console.log(solve());