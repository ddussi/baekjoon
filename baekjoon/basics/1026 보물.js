const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(x=> x.split(" ").map(Number));
function solve() {
    const [[n],a,b] = input.slice();
    a.sort((x,y)=> y-x);
    b.sort((x,y)=> x-y);
    let answer = 0;
    for(let i = 0; i<n ; i++){
        answer += a[i]*b[i]
    }
    return answer
}

console.log(solve());