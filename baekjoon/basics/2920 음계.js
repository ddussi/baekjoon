const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number)
let copy_input = input.slice();
let answer = 0;
for(let i=1; i<copy_input.length; i++){
    if(copy_input[i]-copy_input[i-1]===1){
        answer++;
    }if(copy_input[i]-copy_input[i-1]===-1){
        answer--;
    }
}
if(answer === 7){
    console.log("ascending");
}else if(answer === -7){
    console.log("descending");
}else{
    console.log("mixed");
}