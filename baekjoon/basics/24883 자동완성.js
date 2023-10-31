const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    let n = input[0];
    if(n==="n"){
        return "Naver D2"
    }
    if(n==="N"){
        return "Naver D2"
    }
    return "Naver Whale"
}

console.log(solve());