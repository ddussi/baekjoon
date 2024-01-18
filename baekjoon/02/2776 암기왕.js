const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const T = Number(input[0]);
    let index = 1;
    let result = '';

    for (let i = 0; i < T; i++) {
        const n = Number(input[index++]);
        const note1 = new Set(input[index++].split(' '));

        const m = Number(input[index++]);
        const note2 = input[index++].split(' ');

        for (let j = 0; j < m; j++) {
            result += note1.has(note2[j]) ? '1\n' : '0\n';
        }
    }

    return result.trim();
}

console.log(solve());