const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    let [N, M] = input[0].split(' ').map(Number);
    let output = [];

    function func(count, result) {
        if (count === M) {
            output.push(result);
            return;
        }
        for (let i = 1; i <= N; i++) {
            func(count + 1, [...result, i]);
        }
    }

    func(0, []);
    return output.map(v => v.join(' ')).join('\n');
}

console.log(solve());