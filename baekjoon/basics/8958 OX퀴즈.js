const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/)
let copy_input = input.slice();
let num = copy_input.shift();
for (let i = 0; i < num; i++) {
    let total = 0;
    let score = 0;
    for (let j = 0; j < copy_input[i].length; j++) {
        if (copy_input[i][j] === "O") {
            score += 1;
        } else {
            score = 0;
        }
        total += score;
    }
    console.log(total);
}