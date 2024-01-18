const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split(/\s/).map(Number);
function solve() {
    const [N , R] = input.slice();
    let total = 0;
    let limit = Math.floor(Math.sqrt(N - R));
    for(let i = 1 ; i <= limit ; i++){ 
        if((N - R) % i === 0){ 
            if(i > R) {
                total += i;
            } 
            let otherDivisor = (N - R) / i; // N-R의 약수 중에서 i와 쌍을 이루는 다른 약수
            if(otherDivisor !== i && otherDivisor > R) {
                total += otherDivisor; 
            }
        }
    }
    return total;
}
console.log(solve());