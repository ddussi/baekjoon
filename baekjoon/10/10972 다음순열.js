const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const n = Number(input[0]);
    const arr = input[1].split(' ').map(Number);
    const len = arr.length;
    let i = len - 1;

    while (i > 0 && arr[i - 1] >= arr[i]) {
        i--
    };
    if (i <= 0) return -1;
    let j = len - 1;
    while (arr[j] <= arr[i - 1]) {
        j--
    };
    [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
    j = len - 1;
    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr.join(' ');
}

console.log(solve());