const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const arr = [0 , 1];
    for(let i = 2; i <= input[0] ; i++ ){
        arr.push(arr[i-2]+arr[i-1])
    }
    return [arr[input[0]-1],arr[input[0]]].join(" ")
}
console.log(solve());
