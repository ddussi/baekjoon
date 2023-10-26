const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    const list = input.slice(1);
    const obj = {};
    for(let i = 0 ; i < list.length ; i++){
        obj[list[i]] = 0;
    }
    return Object.keys(obj).sort((x,y)=> x-y).join(" ");
}
console.log(solve());