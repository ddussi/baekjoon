const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [M, N] = input[0].split(' ').map(Number);
    const primeNumbers = [];
    const isPrime = Array(N + 1).fill(true);

    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = M; i <= N; i++) {
        if (isPrime[i]) {
            primeNumbers.push(i);
        }
    }

    return primeNumbers.join('\n');
}

console.log(solve());