const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const num = input.slice().map(Number)[0];
    const list = input.slice(1)[0].split(" ").map(Number);
    let n = 0;
    if(list[0]<num){
        n += list[0];
    }else{
        n += num;
    }
    if(list[1]<num){
        n += list[1];
    }else{
        n += num;
    }
    if(list[2]<num){
        n += list[2];
    }else{
        n += num;
    }
    return n;
}
console.log(solve());