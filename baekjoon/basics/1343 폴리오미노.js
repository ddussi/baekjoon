const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {  
    const list = input.slice();
    let n = 0;
    const answer = [];
    for(let i of list[0]){
        if(i==="X"){
            n++;
        }
        if(i==="."){
            if(n%2!==0){
                return -1
            }
            n=0;
        }
    }
    if(n%2!==0){
        return -1
    }
    n=0;
    for(let j of list[0]){
        if(j==="X"){
            n++;
            if(n===4){
                answer.push("AAAA")
                n=0;
            }
        }
        if(j==="."){
            if(n===2){
                answer.push("BB")
                n=0;
            }
            answer.push(".")
        }
    }
    if(n===4){
        answer.push("AAAA")
        n=0;
    }
    if(n===2){
        answer.push("BB")
        n=0;
    }
    return answer.join("")
}
console.log(solve());