const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy_input = input.slice();
let word = copy_input[0][0];
let symbol = copy_input[0][1];
let answer = "";
if (word === "A") {
    answer += "4"
} else if (word === "B") {
    answer += "3"
} else if (word === "C") {
    answer += "2"
} else if (word === "D") {
    answer += "1"
} else {
    console.log("0.0")
}
if(symbol==="+"){
    answer += ".3"
}else if(symbol==="0"){
    answer += ".0"
}else if(symbol==="-"){
    answer = answer-1 +".7"
}
console.log(answer);