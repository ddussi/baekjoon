const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/)
let copy = input.slice();
copy.shift();
let Space = []
let answer = [];
for(let i = 0; i < copy.length; i++){
    if(copy[i] === "push"){
        Space.push(Number(copy[i+1]));
        i++;
    }else if(copy[i] === "pop"){
        Space.length === 0 ? answer.push("-1") :  answer.push(Space.pop());
    }else if(copy[i] === "size"){
        answer.push(Space.length);
    }else if(copy[i] === "empty"){
        answer.push(Space.length === 0 ? "1": "0");
    }else if(copy[i] === "top"){
        answer.push(Space.length === 0 ? "-1" : Space[Space.length-1])
    }
    
}
console.log(answer.join("\n"));

//이게 node.js에서 시간순으로 4등이라는 게 뭔가 놀랍다.