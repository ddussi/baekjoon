const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const str = input[1];
    const list = input.slice(2).map(Number);
    let n = 0;
    const arr = [];
    const obj = {};
    for(const i of str){
        if(i.charCodeAt()>64){
            if(obj[i]===undefined){
                obj[i] = list[n];
                n++;
            }
        }
    }
    for(const i of str){
        if(i.charCodeAt()>64){
            arr.push(obj[i])
        }else{
            arr.push(i);
        }
    }
    arr.reverse();
    let a;
    let b;
    const answer = [];
    while(arr.length>0){
        let popEl = arr.pop()
        if(popEl==="+"){
            a = answer.pop();
            b = answer.pop();
            answer.push(a+b);
        }else if(popEl==="-"){
            a = answer.pop();
            b = answer.pop();
            answer.push(b-a);
        }else if(popEl==="*"){
            a = answer.pop();
            b = answer.pop();
            answer.push(a*b);
        }else if(popEl==="/"){
            a = answer.pop();
            b = answer.pop();
            answer.push(b/a);
        }else{
            answer.push(popEl);
        }
    }
    return answer[0].toFixed(2);
} 
console.log(solve());

//먼저 알파벳안에 숫자를 다 넣었다는 가정하에 뒤집어서 pop으로 할 수 있게 만들고
//pop으로 스택에 쌓다가 사칙연산이 들어오면 문자 2개를 더 빼서 계산하고 계산한 값을 다시 스택에 넣는 형식으로 하면 끝
