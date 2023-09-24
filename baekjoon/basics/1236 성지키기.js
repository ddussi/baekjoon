const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
  const col = new Array(Number(input[0])).fill(0);
  const row = new Array(Number(input[1])).fill(0);
  const list = input.slice(2);
  let n = 0
  for(let i= 0; i< col.length ; i++){
    for(let j=0; j< row.length ; j++){
      if(list[i][j]==="X"){
        col[i] = 1;
        row[j] = 1;
      }
    }
  }
  for(let i= 0; i< col.length ; i++){
    for(let j=0; j< row.length ; j++){
      if(col[i]===0&&row[j] === 0){
      n++;
      col[i]=1;
      row[j]=1;
      }
    }
  }
  for(let i= 0; i< col.length ; i++){
    for(let j=0; j< row.length ; j++){
      if(col[i]===0||row[j] === 0){
      n++;
      col[i]=1;
      row[j]=1;
      }
    }
  }
  return n
} 
console.log(solve());