const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const str = input[0];
    const N = str.length;

    const set = new Set();

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j <= N; j++) {
            set.add(str.substring(i, j));
        }
    }

    return set.size;
}

console.log(solve());