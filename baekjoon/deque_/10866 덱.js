const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
console.log(input);
function solve() {
    const list = input.slice(1);
    const print = [];
    const answer = [];
    for (let i = 0; i < list.length; i++) {
        if(list[i] === "push_front"){
            answer.unshift(list[i+1]);
        }else if(list[i] === "push_back"){
            answer.push(list[i+1]);
        }else if(list[i] === "pop_front"){
            if(answer.length === 0){
                print.push(-1)
            }else{
                print.push(answer.shift());
            }
        }else if(list[i] === "pop_back"){
            if(answer.length === 0){
                print.push(-1)
            }else{
                print.push(answer.pop());
            }
        }else if(list[i] === "size"){
            print.push(answer.length);
        }else if(list[i] === "empty"){
            if(answer.length === 0){
                print.push("1");
            }else{
                print.push("0");
            }
        }else if(list[i] === "front"){
            if(answer.length === 0){
                print.push("-1");
            }else{
                print.push(answer[0]);
            }
        }else if(list[i] === "back"){
            if(answer.length === 0){
                print.push("-1");
            }else{
                print.push(answer[answer.length-1]);
            }
        }else{
        }
    }
    return print.join("\n")
} 
console.log(solve());