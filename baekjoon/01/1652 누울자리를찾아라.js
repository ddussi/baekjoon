const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const n = parseInt(input.slice(0,1)[0]);
    const list = input.slice(1).map(x=>x.split(""));
    let a = 0;
    for(let i = 0; i<n ; i++){
        let cnt = 0;
        for(let j = 0; j<n ; j++){
            if(list[i][j]==="."){
                cnt += 1;
            }else{
                if(cnt >= 2){
                    a++;
                }
                cnt = 0;
            }
        }
        if(cnt>=2){
            a++;
        }
    }
    let b = 0;
    for(let i = 0; i<n ; i++){
        let cnt = 0;
        for(let j = 0; j<n ; j++){
            if(list[j][i]==="."){
                cnt += 1;
            }else{
                if(cnt >= 2){
                    b++;
                }
                cnt = 0;
            }
        }
        if(cnt>=2){
            b++;
        }
    }
    return `${a} ${b}`
}
console.log(solve());

