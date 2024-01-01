const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

function solve() {
    const N = input.shift();
    const trees = input;
    const distances = [];

    for (let i = 1; i < N; i++) {
        distances.push(trees[i] - trees[i - 1]);
    }

    let GCD = distances[0];
    for (let i = 1; i < distances.length; i++) {
        GCD = gcd(GCD, distances[i]);
    }

    let answer = 0;
    for (let i = 0; i < distances.length; i++) {
        answer += distances[i] / GCD - 1;
    }

    return answer;
}

console.log(solve());
