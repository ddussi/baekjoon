const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let result = [];
    for (let i = 0; i < input.length; i++) {

        let [a, b, c, d] = input[i].slice().split(" ").map(Number);
        let num = a + b + c + d;
        if (num === 1) {
            result.push("C")
        } if (num === 2) {
            result.push("B")
        } if (num === 3) {
            result.push("A")
        } if (num === 4) {
            result.push("E")
        } if (num === 0) {
            result.push("D")
        }
    }

    return result.join("\n");
}

console.log(solve());