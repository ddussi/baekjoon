const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(BigInt);
function solve() {
    const list = input.slice(1);
    const map = new Map();
    for(let i = 0; i < list.length; i++) {
        map.set(list[i], (map.get(list[i]) || BigInt(0)) + BigInt(1));
    }

    let maxValue = BigInt(0);
    let minKey = null;
    for(let [key, value] of map) {
        if (value > maxValue || (value === maxValue && key < minKey)) {
            maxValue = value;
            minKey = key;
        }
    }
    return minKey.toString();
}
console.log(solve());
