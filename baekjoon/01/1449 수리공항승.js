const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let [N, L, ...leaks] = input[0].split(' ').map(Number);
    leaks = input[1].split(' ').map(Number);
    leaks.sort((a, b) => a - b);
    let tapes = 1;
    let tapePos = leaks[0] + L - 1;

    for (let i = 1; i < N; i++) {
        if (tapePos < leaks[i]) {
            tapePos = leaks[i] + L - 1;
            tapes++;
        }
    }
    return tapes;
}

console.log(solve());