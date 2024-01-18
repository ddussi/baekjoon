const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let list = input.sort((x,y)=> y-x)
    return Math.abs(list[0]+list[3]-(list[1]+list[2]));
}
console.log(solve());