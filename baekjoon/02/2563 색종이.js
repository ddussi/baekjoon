const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const obj = {};
    const list = input.slice(1).map(x=> x.split(" "));
    for(let i = 0; i < list.length ; i++){
        let [a , b] = list[i].map(Number);
        for(let i = a ; i< a+10 ; i++){
            for(let j = b ; j< b+10 ; j++){
                obj[`${i} ${j}`] = 0;
            }
        }
    }
    return Object.keys(obj).length;
}
console.log(solve());