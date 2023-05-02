const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let copy = input.slice();
    let num = copy.shift();
    let arr = "";
    for (let i = 0; i < num; i++) {
        let h = copy[3 * i];
        let p = copy[3 * i + 2];
        let x, y = 0;
        if (h < p) {
            if (p % h === 0) {
                y = p / h;
                x = h
            } else {
                y = Math.floor(p / h) + 1;
                x = p % h;
            }
        } else {
            y = 1;
            x = p;
        }
        if (y < 10) {
            y = "0" + y
        }
        arr += `${x}${y}\n`;
    }
    return arr
}
console.log(solve());