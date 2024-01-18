const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let num = input.slice().map(Number)[0];
    if (num < 425) {
        return "Violet"
    } else if (num < 450) {
        return "Indigo"
    } else if (num < 495) {
        return "Blue"
    } else if (num < 570) {
        return "Green"
    } else if (num < 590) {
        return "Yellow"
    } else if (num < 620) {
        return "Orange"
    } else if (num <= 780) {
        return "Red"
    }
}
console.log(solve());