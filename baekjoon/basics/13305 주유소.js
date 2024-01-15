const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const n = Number(input[0]);
    const distance = input[1].split(' ').map(BigInt);
    const price = input[2].split(' ').map(BigInt);

    let total = BigInt(0);
    let minPrice = price[0];
    for (let i = 0; i < n - 1; i++) {
        if (price[i] < minPrice) {
            minPrice = price[i];
        }
        total += minPrice * distance[i];
    }

    return total.toString();
}

console.log(solve());