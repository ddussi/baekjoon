const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
const input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const list = input.slice()[0];
    const arr = [];
    for(let i = 0; i<list.length ; i++){
        arr.push(list.slice(-i));
    }
    return arr.sort().join("\n")
}

console.log(solve());