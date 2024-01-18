const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function isPrime(num) {
    if (num === 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let sqrt = parseInt(Math.sqrt(num));
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solve() {
    let testCase = input[0];
    let result = '';
    for (let i = 1; i <= testCase; i++) {
        let num = input[i];
        while (!isPrime(num)) {
            num++;
        }
        result += num + '\n';
    }
    return result;
}

console.log(solve().trim());