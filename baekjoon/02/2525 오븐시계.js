const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const [H, M] = input[0].split(' ').map(Number);
    const cookTime = Number(input[1]);

    let totalMinutes = H * 60 + M + cookTime;
    let hours = Math.floor(totalMinutes / 60) % 24;
    let minutes = totalMinutes % 60;

    return `${hours} ${minutes}`;
}


console.log(solve());