const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve(input){
    const num = [0, 1, 3];
    const tiling = (n) => {
        if(num[n]!==undefined){
            return num[n];
        }
        if(n<=2){
            return num[n];
        }
        num[n] = (tiling(n-1)+tiling(n-2)+tiling(n-2))%10007;
        return num[n]
    }
    tiling(input);
    return num[input]
    }
console.log(solve(input));