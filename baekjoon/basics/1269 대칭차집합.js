const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const A = new Set(input[1].split(' '));
    const B = new Set(input[2].split(' '));
    let count = 0;
    for (let item of A) {
        if (!B.has(item)) {
            count++;
        }
    }
    for (let item of B) {
        if (!A.has(item)) {
            count++;
        }
    }
    return count;
}
console.log(solve());
