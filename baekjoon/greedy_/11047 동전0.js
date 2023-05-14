const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let n = input[0];
    let k = input[1];
    const list = input.slice(2).reverse();
    let num = 0;
    for(let i = 0 ; i<n ; i++){
        if(k%list[i]===0){
            num += k/list[i];
            break;
        }else if(k>list[i]){
            num += Math.floor(k/list[i]);
            k = k%list[i];
        }
    }
    return num;
} 
console.log(solve());

/* 
 동전 종류를 배열에 저장하고 그 순서를 뒤집어서 큰값부터 K를 나누고 나눌 때 마다 횟수에 1씩 더하며 나머지가 0이 된다면 횟수를 출력한다.
*/