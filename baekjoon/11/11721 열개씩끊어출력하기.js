const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    const list = input[0];
    let n = Math.floor(list.length/10);
    const answer = [];
    for( let i = 1; i <= n+1; i++){
        if(i===n+1){
            answer.push(list.slice((i-1)*10));
        }else{
            answer.push(list.slice((i-1)*10,i*10));
    }
}
    return answer.join("\n")
}
console.log(solve());