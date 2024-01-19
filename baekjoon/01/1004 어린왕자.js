const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const T = Number(input[0]);
    let index = 1;
    const result = [];

    for (let i = 0; i < T; i++) {
        const [x1, y1, x2, y2] = input[index++].split(' ').map(Number);
        const n = Number(input[index++]);
        let count = 0;

        for (let j = 0; j < n; j++) {
            const [cx, cy, r] = input[index++].split(' ').map(Number);
            const dist1 = Math.pow(x1 - cx, 2) + Math.pow(y1 - cy, 2);
            const dist2 = Math.pow(x2 - cx, 2) + Math.pow(y2 - cy, 2);
            const radiusSquared = Math.pow(r, 2);

            if ((dist1 < radiusSquared && dist2 > radiusSquared) || (dist1 > radiusSquared && dist2 < radiusSquared)) {
                count++;
            }
        }

        result.push(count);
    }

    return result.join('\n');
}

console.log(solve());