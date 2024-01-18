const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solve() {
    const L = input[0];
    const R = input[1];
    if (L.length !== R.length) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < L.length; i++) {
        if (L[i] === R[i] && L[i] === '8') {
            count++;
        }
        else if (L[i] !== R[i]) {
            break;
        }
    }
    return count;
}

console.log(solve());