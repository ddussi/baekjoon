const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let list = input.slice(1).map(x=>x.split(" "));
    let max = "";
    let min = "";
    for(let j = 3; j>=1 ; j-- ){
        let b = 0;
        for(let i of list){
            let n = Number(i[j]);
            if(b < n){
                b = n;
            }
        }
        if(list.filter(x => x[j]==b).length>=2){
            list = list.filter(x => x[j]==b)
        }else{
            min = list.filter(x => x[j]==b)[0][0]
            break;
        }
    }    
    for(let j = 3; j>=1 ; j-- ){
        let a = 3000;
        for(let i of list){
            let n = Number(i[j]);
            if(a > n){
                a = n;
            }
        }
        if(list.filter(x => x[j]==a).length>=2){
            list = list.filter(x => x[j]==a)
        }else{
            max = list.filter(x => x[j]==a)[0][0]
            break;
        }
    }
    return `${min}\n${max}`
}
console.log(solve());
