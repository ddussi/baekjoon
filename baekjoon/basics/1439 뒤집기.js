const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split(/\s/);
function solve() {
    const list = input.slice()[0]
    let obj = {"1" : 0 ,"0": 0};
    let target = list[0]
    obj[list[0]] += 1;
    for(let i = 0; i<list.length ; i++){
        if(target === list[i]){
            continue;
        }else{
            obj[list[i]] += 1
            target = list[i];
        }
    }
    return Math.min(...Object.values(obj))
}
console.log(solve());