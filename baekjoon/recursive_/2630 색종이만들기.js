const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const list = input.slice(1).map(x=>x.split(" "))
    let n = 0
    let m = 0
    function fold(arr){
        if(!arr.map(x=>x.includes("0")).includes(true)){
            return n+=1
        }
        if(!arr.map(x=>x.includes("1")).includes(true)){
            return m+=1
        }
        if(arr.length === 1){
            return 0
        }
        fold(arr.slice(0, arr.length/2).map(x=>x.slice(0, arr.length/2)))
        fold(arr.slice(0, arr.length/2).map(x=>x.slice(arr.length/2)))
        fold(arr.slice(arr.length/2).map(x=>x.slice(0, arr.length/2)))
        fold(arr.slice(arr.length/2).map(x=>x.slice(arr.length/2)))
    }
    fold(list)
    return `${m}\n${n}`;
}
console.log(solve());