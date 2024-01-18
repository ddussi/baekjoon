const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

function solve() {
const [a,b,c] = input;
if(a+b+c===180){
    if(a===60&&b===60){
        return "Equilateral";
    }
    if(a===b||a===c||b===c){
        return "Isosceles"
    }
    if(a!==b&&a!==c&&b!==c){
        return "Scalene"
    }
}else{
    return "Error"
}
}
console.log(solve());