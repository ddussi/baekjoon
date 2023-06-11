const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve(str) {
    if (!str.includes("---")) {
        return str;
    } else {
        const third = str.length / 3;
        const gap = " ".repeat(third);
        const upperLevel = solve(str.slice(0, third));
        const lowerLevel = solve(str.slice(2 * third));
        return upperLevel + gap + lowerLevel;
    }
}

const arr = [];
for (i of input) {
    const num = 3 ** i;
    const str = "-".repeat(num);
    arr.push(solve(str));
}
console.log(arr.join("\n"));
/* 
3^n을 곱한 문자열 "-"을 함수에 입력값으로 넣어준다.
함수에 들어온 문자열에 "---"을 포함하지 않으면 리턴해준다.
해당 값을 1/3으로 나눈 후 0~1/3과 2/3~1부분은 다시 함수로 돌려주고 나머지 부분은 공백으로 바꾼다.
*/