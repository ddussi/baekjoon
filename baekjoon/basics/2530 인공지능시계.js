const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);

function solve() {
    let [A, B, C] = input.slice(0, 3);
    let D = input[3];

    C += D;
    B += Math.floor(C / 60);
    C = C % 60;

    A += Math.floor(B / 60);
    B = B % 60;

    A = A % 24;
    return [A, B, C].join(" ");
}

console.log(solve());