const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number); 
function solve() {
    const n = input.slice(0,1)[0];
    const list = input.slice(1).sort((x,y)=> y-x);
    let max = 0;
    
    for (let i = 0; i < n; i++) {
        const temp = list[i] * (i + 1);
        if (temp > max) {
            max = temp;
        }
    }
    
    return max;
}

console.log(solve());