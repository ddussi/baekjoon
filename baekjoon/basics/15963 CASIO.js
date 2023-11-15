const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {  
    const [a , b] = input[0].split(" ")
    if(a===b){
        return 1
    }
    return 0

}
console.log(solve());