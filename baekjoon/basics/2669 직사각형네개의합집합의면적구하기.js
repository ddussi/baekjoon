const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const obj = {};
    const list = input.slice().map(x=> x.split(" "));
    for(let i = 0; i < list.length ; i++){
        let [ax , ay, bx, by ] = list[i].map(Number);
        for(let i = ax ; i< bx ; i++){
            for(let j = ay ; j< by ; j++){
                obj[`${i} ${j}`] = 0;
            }
        }
    }
    return Object.keys(obj).length;
}
console.log(solve());