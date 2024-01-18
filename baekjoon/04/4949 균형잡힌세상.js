const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let answer = "";
    for(let i = 0; i < input.length; i++){
        let sign = "";
        let arr = [];
        if(input[i] === "."){
            break;
        }
        for (let j = 0 ; j < input[i].length ; j++){
            if(input[i][j] === "("){
                arr.push("(");
            }else if(input[i][j] === ")"){
                if(arr.pop() !== "("){
                    sign = "no";
                    arr.push("x");
                    break;
                }
            }else if(input[i][j] ==="["){
                arr.push("[");
            }else if(input[i][j] === "]"){
                if(arr.pop() !== "["){
                    sign = "no";
                    arr.push("x");
                    break;
                }
            }
        }
        if(arr.length===0){
            sign = "yes";
        }else{
            sign = "no";
        }
        answer += sign+"\n";
    }
    return answer;
}
console.log(solve());