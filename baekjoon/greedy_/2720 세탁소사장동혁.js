const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
function solve() {
    const arr = [];
    for(let i = 1 ; i <= input[0]; i++){
        let target = input[i];
        let a = 0; 
        let b = 0;
        let c = 0;
        let d = 0;
        if(target%25>=0){
            a = Math.floor(target/25);
            target -= a*25;
        }
        if(target%10>=0){
            b = Math.floor(target/10);
            target -= b*10;
        }
        if(target%5>=0){
            c = Math.floor(target/5);
            target -= c*5;
        }
        if(target>=0){
            d = target;
        }
        arr.push(`${a} ${b} ${c} ${d}`)
    }
    return arr.join("\n");
}
console.log(solve());