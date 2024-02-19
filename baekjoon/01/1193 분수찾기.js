const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let X = Number(input[0]);
    let line = 0, max = 0;

    while (X > max) {
        line++;
        max += line;
    }

    const diff = max - X;
    const denominator = line % 2 === 0 ? 1 + diff : line - diff;
    const numerator = line % 2 === 0 ? line - diff : 1 + diff;

    return `${numerator}/${denominator}`;
}

console.log(solve());