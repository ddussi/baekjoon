const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const list = input.slice(1).map(Number);
    list.sort((x,y)=> x-y);
    let n = 0n;
    for(let i = 1; i<= list.length; i++){
        n += BigInt(Math.abs(list[i-1]-i));
    }
    return n.toString()
}
console.log(solve());