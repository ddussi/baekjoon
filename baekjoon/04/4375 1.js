const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        let N = Number(input[i]);
        let num = 1;
        let count = 1;

        while (num % N !== 0) {
            num = (num * 10 + 1) % N;
            count++;
        }

        result += count + "\n";
    }

    return result.trim();
}

console.log(solve());