const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let n = Number(input[0].split(" ")[0]);
    let k = Number(input[0].split(" ")[1]);
    let list = {};
    const answer = [];
    for(let i = 1; i<=n ; i++){
        let x = input[i].split(" ");
        list[x[0]] = x[1];
    }
    for(let i = n+1; i <k+n+1; i++){
        answer.push(list[input[i]]);
    }
    return answer.join("\n");
} 
console.log(solve());