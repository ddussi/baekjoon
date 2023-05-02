const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy = input.slice();
let num = copy.shift();
let list = 0;
let answer = "";
for (let i = 0; i < num; i++) {
    for (let j = 0; j < copy[i].length; j++) {
        copy[i][j] === "(" ? list+= 1 : list -= 1;
        if (list < 0) {
            break;
        }
    }
    if(list === 0){
        answer += "YES";
    }else{
        answer += "NO";
    }
    answer += "\n";
    list = 0;
}
console.log(answer)