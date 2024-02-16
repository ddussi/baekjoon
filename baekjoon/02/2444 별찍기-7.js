const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const N = Number(input[0]);
    let result = '';

    for (let i = 1; i <= N; i++) {
        const space = ' '.repeat(N - i);
        const star = '*'.repeat(2 * i - 1);
        result += `${space}${star}\n`;
    }

    for (let i = N - 1; i >= 1; i--) {
        const space = ' '.repeat(N - i);
        const star = '*'.repeat(2 * i - 1);
        result += `${space}${star}\n`;
    }

    return result;
}

console.log(solve());