const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let answer = 0;
    let n = input[0];
    let k = input[1];
    answer = factorial(n)/(factorial(k)*factorial(n-k));
    return answer;
    
}

function factorial(num){
    let answer = 1;
    for(let i = num ; i>0 ; i--)
    {
        answer = answer*i;
    }
    return answer;
}
console.log(solve())

/*
이항계수는 (n,k)일 때 n!/(k!*(n-k)!) 로 계산하면 나온다. 조합과 같다고 있다.
*/