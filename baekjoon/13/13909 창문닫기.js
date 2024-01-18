const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number); 
function solve() {
    let n = input.slice()[0];
    return Math.floor(Math.sqrt(n))
}

console.log(solve());