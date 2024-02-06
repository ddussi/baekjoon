const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const N = Number(input[0]);
    const numbers = input.slice(1).map(Number).sort((a, b) => a - b);

    let minCount = 5;
    for (let start = 0; start < N; start++) {
        let end = start + 1;
        while (end < N && numbers[end] - numbers[start] <= 4) {
            end++;
        }

        minCount = Math.min(minCount, 5 - (end - start));
    }

    return minCount;
}

console.log(solve());