const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    const arr = input.slice(1);
    const newArr = [];
    arr.sort();
    arr.sort((a, b) =>a.length - b.length);
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr.join("\n");
}
console.log(solve());
