const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let [a,b,a_1,b_1]= input;
    let x = a_1-a;
    let y = a-0;
    let z = b_1-b;
    let k = b-0;
    return Math.min(x,y,z,k);
}
console.log(solve());