const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n")
let copy_input = input.slice();
let num = copy_input.shift(); // 테스트 넘버
let answer = "";
for (let i = 0; i < num; i++) {
    let repeat_num = copy_input[i].split(" ")[0];
    let text_length = copy_input[i].split(" ")[1].length;
    for (let j = 0; j < text_length; j++) {
        answer += copy_input[i].split(" ")[1][j].repeat(repeat_num);
    }
    console.log(answer);
    answer = "";
}