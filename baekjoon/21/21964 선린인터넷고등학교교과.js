const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solve() {
    const list = input.slice(1)[0]
    return list.slice(-5)
}
console.log(solve());
