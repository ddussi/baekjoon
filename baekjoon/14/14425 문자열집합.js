const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const [N, M] = input[0].split(" ").map(Number);
    const S = input.slice(1, N + 1);
    const list = input.slice(N + 1, N + M + 1);
    const obj = {};
    let answer = 0;
    for (let i of S) {
        obj[i] = 0;
    }
    for (let j of list) {
        if (obj[j] >= 0) {
            obj[j] += 1;
            answer += 1;
        }
    }
    return answer
}
console.log(solve());
