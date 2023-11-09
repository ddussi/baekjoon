const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    let arr = [];
    let n = 0;
    const target = input[0];
    const list = input.slice(2);
    for(let i = 0; i<list.length ; i++){
        const newList = list[i].concat(list[i]);
        if(newList.includes(target)){
            n++;
        }
    }
    return n;
}
console.log(solve());
