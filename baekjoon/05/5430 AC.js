const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const T = Number(input[0]);
    let idx = 1;
    const result = [];

    for (let i = 0; i < T; i++) {
        const p = input[idx++];
        const n = Number(input[idx++]);
        const arr = input[idx++];
        let deque = n === 0 ? [] : arr.slice(1, -1).split(',');

        let isReversed = false;
        let isError = false;

        for (let j = 0; j < p.length; j++) {
            if (p[j] === 'R') {
                isReversed = !isReversed;
            } else {
                if (deque.length < 1) {
                    isError = true;
                    break;
                }
                if (isReversed) {
                    deque.pop();
                } else {
                    deque.shift();
                }
            }
        }

        if (isError) {
            result.push('error');
            continue;
        }

        if (isReversed) {
            deque.reverse();
        }

        result.push(`[${deque.join(',')}]`);
    }

    return result.join('\n');
}

console.log(solve());