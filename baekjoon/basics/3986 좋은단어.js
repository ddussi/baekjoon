const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
const input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const list = input.slice(1);
    let n = 0;
    for(let i = 0; i<list.length ; i++){
        const target = list[i].split("");
        const size = target.length;
        if(target.length%2 === 1){
            continue;
        }
        const arr = [];
        for(let j = 0 ; j<size ; j++){
            let x = target.pop();
            if(arr[arr.length-1] === x){
                arr.pop()
            }else{
                arr.push(x);
            }
        }
        if(arr.length===0){
            n++;
        }
    }
    return n
}

console.log(solve());