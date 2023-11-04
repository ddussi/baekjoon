const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(BigInt);
function solve() {
    const n = input[0];
    if(n===1||n===2){
        return 1;
    }
    const arr = [1n,1n]
    for(let i = 2 ; i < n ; i++){
        arr[i] = arr[i-1]+arr[i-2];
    }
    return arr.pop().toString();
}
console.log(solve());