const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const N = Number(input[0]);
    const students = input[1].split(' ').map(Number);
    const order = Array.from({ length: N }, (_, i) => i + 1);

    const stack = [];

    for (let student of students) {
        stack.push(student);
        while (stack.length > 0 && stack[stack.length - 1] === order[0]) {
            stack.pop();
            order.shift();
        }
    }

    return order.length === 0 ? "Nice" : "Sad";
}


console.log(solve());