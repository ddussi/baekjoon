const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

function solve() {
    let score = input.slice(1).reverse();
    let change = 0;

    for (let i = 0; i < score.length - 1; i++) {
        if (score[i] <= score[i + 1]) {
            let diff = score[i + 1] - score[i] + 1;
            change += diff;
            score[i + 1] -= diff;
        }
    }

    return change;
}

console.log(solve());