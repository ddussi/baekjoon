const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const n = input[0];
    const list = input.slice(1);
    let a = 0;
    let b = 0;
    for (let i = 0; i < n; i++) {
        let x = list[i]
        if (x === "D") {
            a++;
        } else if (x === "P") {
            b++;
        }
        if (Math.abs(a - b) >= 2) {
            break;
        }
    }
    return `${a}:${b}`
}

console.log(solve());