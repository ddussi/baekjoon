const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    const obj = {};
    for(let i of input){
        if(obj[i]){
            obj[i]+=1;
        }else{
            obj[i]=1;
        };
    }
    if(Object.keys(obj).length===1){
        return 10000+Object.keys(obj)[0]*1000;
    }else if(Object.keys(obj).length===2){
        return 1000+Object.keys(obj).filter(x=> obj[x]===2)*100;;
    }else if(Object.keys(obj).length===3){
        return Math.max(...Object.keys(obj))*100;
    }
}
console.log(solve());