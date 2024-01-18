const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split("\n");
function solve() {
    const list = [];
    for(let i of input){
        list.push(i);
    }
    list.pop()
    return list.join("\n")
}
console.log(solve());