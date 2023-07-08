const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function answer(){
    const list = input.slice(1);
    const dp = new Array(list.length).fill(1);
    for(let i = 0; i<list.length; i++){
        let tmp = 0;
        for(let j=0; j<i; j++){
            if(list[i]>list[j]&&dp[j]>tmp){
                tmp = dp[j];
            }
        }
        dp[i] = tmp + 1;
    }
    return Math.max(...dp)
}
console.log(answer());