const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const MAX = 123456 * 2;
    const isPrime = Array(MAX + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(MAX); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= MAX; j += i) {
                isPrime[j] = false;
            }
        }
    }
    const result = [];
    for (let i = 0; i < input.length; i++) {
        const n = Number(input[i]);
        if (n === 0) break;
        let count = 0;
        for (let j = n + 1; j <= 2 * n; j++) {
            if (isPrime[j]) {
                count++;
            }
        }
        result.push(count);
    }

    return result.join('\n');
}

console.log(solve());