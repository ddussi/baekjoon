
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve(n) {
if(n>1){
    return n+solve(n-1);
}else{
    return 1;
}
}
console.log(solve(input[0]));

/* 재귀로 풀어봤음 */