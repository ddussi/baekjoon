const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const [n, x] = input.slice(0,2);
    const list = input.slice(2);
    let max = 0;
    let count = 0;
    let sum = 0;
    let arr = new Array(n).fill(0);
    for(let i = 0; i < x ; i++){
        sum += list[i];
    }
    arr[x-1] = sum;
    max = sum;
    for(let i = x; i < n ; i++){
        sum = sum - list[i-x] + list[i];
        arr[i] = sum;
        max = Math.max(max, sum);
    }
    for(let i = 0; i < n ; i++){
        if(arr[i] === max){
            count++;
        }
    }
    if(max === 0){
        return "SAD"
    }
    return `${max}\n${count}`
}

console.log(solve());