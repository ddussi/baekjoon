const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [N, newScore, P] = input[0].split(' ').map(Number);
    const scores = input[1] ? input[1].split(' ').map(Number) : [];
    if (scores.length >= P && scores[P - 1] >= newScore) {
        return -1;
    }

    let rank = 1;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > newScore) {
            rank++;
        } else {
            break;
        }
    }
    return rank;
}

console.log(solve());