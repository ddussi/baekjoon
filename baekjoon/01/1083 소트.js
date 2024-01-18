const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
let list = input.slice(1);
let newlist = [];
let num = list.pop();
let x = 0;
let i = 0;
  while(num>0){
    if(list.length===0){
      break;
    }
    x = Math.max(...list.slice(0,Math.min(num+1, list.length)));
    let y = list.indexOf(x);
    list.splice(list.indexOf(x),1);
    newlist.push(x);
    num-=y;
    i++;
  }
  return newlist.concat(list).join(" ");
}
console.log(solve());
/* 
s의 값을 살펴보고 list의 0부터 s까지 살펴봤을 때 그중에서 가장 큰 값을 새로운 배열 list에 push로 넣어주고 그 큰 값의 인덱스 값을 찾아서 원래 list 배열에서 삭제시킨다.
그리고 s의 값에 그 큰 값의 인덱스 값만큼 빼준다.
만약 s의 값이 남아있다면 위의 내용을 반복하고 s의 값이 0이 되면 반복 탈출
만약 다 옮기고도 s값이 남았다면(list의 길이가 0일때) 반복에서 탈출한다
반복이 끝난 후 list에 남아있는 요소를 newlist뒤에 붙여준다.
*/