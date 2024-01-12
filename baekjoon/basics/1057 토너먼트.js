const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solve() {
    let [N, A, B] = input;
    let round = 0;

    while (A !== B) {
        A = Math.floor((A + 1) / 2);
        B = Math.floor((B + 1) / 2);
        round++;
    }

    return round;
}

console.log(solve());