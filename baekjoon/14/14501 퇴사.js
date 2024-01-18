const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let n = parseInt(input[0]) //
    let list = input.slice(1).map(x => x.split(" ").map(Number))
    let dp = new Array(n).fill(0)
    for(let i = 0; i<list.length ; i++){
        if(i+list[i][0]>list.length){ // N+1일 넘어가는 일정은 패스
            continue;
        }
        dp[i] += list[i][1] // 해당 일정을 해냈을 때 이득을 저장
        for(let j = i+list[i][0]; j<list.length ; j++){ // 해당 일정이 끝나는 날부터 이득을 저장해줌
            dp[j] = Math.max(dp[j],dp[i]); // 이득이 저장될 때 혹시 다른 상담을 진행했을 때 이득이 더 큰지 확인 후 저장
        }
    }
    return Math.max(...dp) // 모든 일정중 가장 이득이 큰 일정을 해냈을 때 이득을 리턴
}
console.log(solve());
