const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
let arr = input.slice(1)
let newarr = arr.map((x)=>x.split(" "))
newarr.sort((a,b)=> parseInt(a[0]-b[0]))
return newarr.join("\n").replace(/,/g," ")
}
console.log(solve());

//자바스크립트는 엕진에 따라 다르지만 예를 들어 V8인 경우 안정 정렬이 자동으로 되기 때문에 그냥 나이만 계산해도 나온다.