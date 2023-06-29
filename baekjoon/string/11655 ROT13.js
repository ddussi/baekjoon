const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim();
function solve() {
    const arr = [];
    for(const i of input){
        if(i === " "){
            arr.push(" ");
            continue;
        }
        if(i.charCodeAt()<58){
            arr.push(i);
            continue;
        }
        let num = i.charCodeAt()+13;
        if(i.charCodeAt()<97){
            if(num>90){
                num-=26;
            }
        }else{
            if(num>122){
                num-=26;
            }
        }
        let num1 = String.fromCharCode(num);
        if(typeof(i) === "string"){
            arr.push(num1);
        }
    }
return arr.join("");
} 
console.log(solve());
