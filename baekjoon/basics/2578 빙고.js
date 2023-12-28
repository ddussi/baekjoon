const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const list = input.slice(0, 5).map((x) => x.split(" "));
    const host = input.slice(5).map((x) => x.split(" "));
    let arr = Array(5).fill().map(() => Array(5).fill(false));
    let cnt = 0;

    for (let n = 0; n < 25; n++) {
        cnt++;
        let [hx, hy] = [Math.floor(n / 5), n % 5];
        let target = host[hx][hy];

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (list[i][j] === target) {
                    arr[i][j] = true;
                }
            }
        }

        let bingo = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i].every((x) => x === true)) bingo++;
            if (arr.map((row) => row[i]).every((x) => x === true)) bingo++;
        }

        if (arr.map((_, i) => arr[i][i]).every((x) => x === true)) bingo++;
        if (arr.map((_, i) => arr[i][4 - i]).every((x) => x === true)) bingo++;

        if (bingo >= 3) {
            return cnt;
        }
    }
}

console.log(solve());