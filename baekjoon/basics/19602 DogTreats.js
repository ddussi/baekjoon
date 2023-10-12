const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    if((input[0]+2*input[1]+3*input[2])>=10){
        return "happy"
    }
    return "sad"
}

console.log(solve());