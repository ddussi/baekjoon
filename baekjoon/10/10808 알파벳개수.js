const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solve() {
    const counts = Array.from({length: 26}, () => 0);
    for(let i=0; i<input.length; i++){
        const index = input.charCodeAt(i) - 'a'.charCodeAt(0);
        counts[index]++;
    }
    return counts.join(' ');
}

console.log(solve());