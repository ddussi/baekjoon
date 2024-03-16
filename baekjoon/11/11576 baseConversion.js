const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [A, B] = input[0].split(' ').map(Number);
    const m = Number(input[1]);
    const A_num = input[2].split(' ').map(Number);

    let decNum = 0;
    A_num.forEach((num, idx) => {
        decNum += num * Math.pow(A, m - idx - 1);
    });

    let B_num = [];
    while (decNum > 0) {
        B_num.push(decNum % B);
        decNum = Math.floor(decNum / B);
    }

    return B_num.reverse().join(' ');
}

console.log(solve());