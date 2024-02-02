const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let document = input[0];
    const word = input[1];
    let count = 0;

    while (true) {
        const foundIndex = document.indexOf(word);
        if (foundIndex === -1) break;

        document = document.substr(foundIndex + word.length);
        count++;
    }

    return count;
}

console.log(solve());