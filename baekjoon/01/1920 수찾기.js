const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve() {
    const array = input.slice();
    const A = array[1].split(" ");
    const M = array[3].split(" ");
    const list = Object.fromEntries(M.map(key => [key, 0]));
    for(let i = 0; i<Number(array[0]); i++){
        if(list[A[i]] === 0){
            list[A[i]]+=1;
        }
    }
    const answer = [];
    for(let i = 0; i<Number(array[2]); i++){
        answer.push(list[M[i]]);
    }
        return answer.join("\n");
}
console.log(solve());