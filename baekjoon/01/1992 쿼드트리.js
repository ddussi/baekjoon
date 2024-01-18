const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const n = parseInt(input[0]);
    const map = input.slice(1).map(line => line.split(''));

    const isSame = (x, y, n) => {
        for (let i = x; i < x + n; i++) {
            for (let j = y; j < y + n; j++) {
                if (map[x][y] !== map[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    const quadTree = (x, y, n) => {
        if (isSame(x, y, n)) {
            return map[x][y];
        } else {
            const result = [];
            const half = n / 2;
            result.push(quadTree(x, y, half));
            result.push(quadTree(x, y + half, half));
            result.push(quadTree(x + half, y, half));
            result.push(quadTree(x + half, y + half, half));

            return "(" + result.join('') + ")";
        }
    }

    return quadTree(0, 0, n);
}

console.log(solve());