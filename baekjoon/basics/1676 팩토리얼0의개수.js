const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split(/\s/).map(Number)[0];
function solve() {
    let count = 0;
    for(let i = 1; i <= input; i++) {
        let num = i;
        while (num % 5 === 0) {
            num /= 5;
            count++;
        }
    }
    return count
}
console.log(solve());