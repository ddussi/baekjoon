const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const A = parseInt(input[0]);
    const B = input[1];

    const B0 = parseInt(B[2]);
    const B1 = parseInt(B[1]);
    const B2 = parseInt(B[0]);

    console.log(A * B0);
    console.log(A * B1);
    console.log(A * B2);
    console.log(A * parseInt(B));
}

solve();