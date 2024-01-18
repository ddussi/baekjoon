const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const arr = []
    for(let i = 0 ; i < input.length-2; i+=2){
        let a = input[i];
        let b = input[i+1];
        if(a>b){
            if(a%b===0){
                arr.push("multiple");
            }else{
                arr.push("neither")
            }
        }else{
            if(b%a===0){
                arr.push("factor");
            }else{
                arr.push("neither")
            }
        }
    }
    return arr.join("\n")
}
console.log(solve());
