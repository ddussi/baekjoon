const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const N = Number(input[0]);
    const numbers = input[1].split(" ").map(Number).sort((a, b) => a - b);
    const x = Number(input[2]);

    let count = 0;
    let left = 0, right = N - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === x) {
            count++;
            left++;
            right--;
        } else if (sum < x) {
            left++;
        } else {
            right--;
        }
    }

    return count;
}

console.log(solve());