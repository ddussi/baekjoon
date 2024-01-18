const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let list = input.slice().map(Number)[0];
    let n = 0;
    for(let i = 64; i>0 ; i/=2){
        if(i>list){
            continue;
        }
        if(i===list){
            n++;
            break;
        }
        if(i<list){
            list = list-i;
            n++;
        }
    }
    return n
}
console.log(solve());