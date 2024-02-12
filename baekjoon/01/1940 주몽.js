const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const N = Number(input[0]);
    const M = Number(input[1]);
    const arr = input[2].split(' ').map(Number).sort((a, b) => a - b);

    let count = 0;
    let start = 0, end = N - 1;

    while (start < end) {
        const sum = arr[start] + arr[end];

        if (sum === M) {
            count++;
            start++;
        } else if (sum > M) {
            end--;
        } else {
            start++;
        }
    }

    return count;
}

console.log(solve());