const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let [n,m] = input.slice();
    const list = input.slice(2).sort((x,y) => x-y);
    let price = 0;
    let cnt = 0
    for(let i = 0; i<list.length ; i++){
        let eggCnt = n<list.length-i?n:list.length-i
        if(price<list[i]*eggCnt) 
        {
            price=list[i]*eggCnt;
            cnt = list[i];
        }

    }
    return `${cnt} ${price}`;
}

console.log(solve());