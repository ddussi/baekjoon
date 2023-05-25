const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
let arr = input.slice(1) // 
let newArr = arr.map((x)=>x.split(" "))
newArr.sort((a,b)=> parseInt(a[1]-b[1]))
newArr.sort((a,b)=> parseInt(a[0]-b[0]))
return newArr.join("\n").replace(/,/g," ")
}
console.log(solve());

/* 배열을 2차원배열로 만들어서
[[x1,y1][x2,y2]...] 이렇게 유지하고 정렬을 시킬 때 [i][1]로 y부터 정렬 시키고 그다음 [i][0]로 x를 정렬시킨다.
*/