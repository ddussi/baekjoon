const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split(/\s/);
function solve() {
    let [n , m] = input.slice(0,2).map(Number);
    let a = input.slice(2,2+n).sort();
    let b = input.slice(2+n,2+n+m).sort();

    let i = 0; 
    let j = 0;
    let result = []; 

    while(i < n && j < m) {
        if(a[i] < b[j]) {
            i++;
        } else if(a[i] > b[j]) {
            j++;
        } else {
            result.push(a[i]);
            i++;
            j++;
        }
    }

    return `${result.length}\n${result.join("\n")}`
}
console.log(solve());