const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let list = input.slice(1);
    list.sort((a,b)=> a-b);
    return list.join("\n")
}
console.log(solve());