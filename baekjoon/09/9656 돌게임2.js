const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const N = Number(input.slice());
    let x = N % 4;
    if (x === 0) {
        return "SK"
    }
    if (x === 1) {
        return "CY"
    }
    if (x === 2) {
        return "SK"
    }
    if (x === 3) {
        return "CY"
    }
}

console.log(solve());