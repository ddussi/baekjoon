const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const C = Number(input[0]);
    let result = '';

    for (let i = 1; i <= C; i++) {
        const scores = input[i].split(' ').map(Number);
        const N = scores.shift();
        const average = scores.reduce((a, b) => a + b, 0) / N;

        const overAverageCount = scores.filter(score => score > average).length;
        const rate = (overAverageCount / N * 100).toFixed(3);

        result += `${rate}%\n`;
    }

    return result;
}

console.log(solve());