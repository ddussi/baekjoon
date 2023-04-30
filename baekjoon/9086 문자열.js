const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let num = input.shift();
let copy_input = input.slice();
let answer = ""
for (let i = 0; i < num; i++) {
    answer += copy_input[i][0]+copy_input[i][copy_input[i].length-1]+"\n";
}
console.log(answer);