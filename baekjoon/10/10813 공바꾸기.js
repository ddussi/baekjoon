const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let arr = input.map(x => x.split(" "))
    let basket = Number(arr[0][0]);
    const change = arr.slice(1).map(x=> x.map(Number))
    let num = new Array(basket).fill(0)
    for(let i = 1 ; i<=basket ; i++){
        num[i-1]=i;
    }
    for(let i = 0 ; i<Number(arr[0][1]); i++){
        let a = change[i][0];
        let b = change[i][1];
        let x = num[a-1];
        num[a-1] = num[b-1];
        num[b-1] = x;
    }
    return num.join(" ")
}
console.log(solve());