const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
const arr = []
function solve(n) {
    if(n === input[0]){
    arr.push('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');
    arr.push('"재귀함수가 뭔가요?"');
    arr.push('"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.');
    arr.push('마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.');
    arr.push('그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."');
  }
  let str = "_".repeat(4*(input[0]-n+1))
  if(n>1){
    arr.push(`${str}"재귀함수가 뭔가요?"`);
    arr.push(`${str}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`);
    arr.push(`${str}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`);
    arr.push(`${str}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`);
    solve(n-1);
    arr.push(`${str}라고 답변하였지.`);
  }
  if(n===1){
    arr.push(`${str}"재귀함수가 뭔가요?"`);
    arr.push(`${str}"재귀함수는 자기 자신을 호출하는 함수라네"`);
    arr.push(`${str}라고 답변하였지.`);
  }
  if(n === input[0]){
    arr.push('라고 답변하였지.')
  }
  if(n===1){
    return
  }
}
solve(input[0])
console.log(arr.join("\n"));