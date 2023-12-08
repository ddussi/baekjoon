const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const log = new Set();

    for(let i = 1; i < input.length; i++) {
        let [name, status] = input[i].split(' ');

        if(status === 'enter') {
            log.add(name);
        } else {
            log.delete(name);
        }
    }

    const sortedLog = Array.from(log).sort().reverse();
    return sortedLog.join('\n');
}

console.log(solve());