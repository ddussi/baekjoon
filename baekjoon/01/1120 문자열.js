const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);

function solve() {
    const [A, B] = input.slice();
    let minDiff = Infinity;

    for (let i = 0; i <= B.length - A.length; i++) {
        let diff = 0;
        for (let j = 0; j < A.length; j++) {
            if (A[j] !== B[i + j]) diff++;
        }
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}

console.log(solve());