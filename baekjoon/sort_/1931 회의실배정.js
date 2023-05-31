const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const list = input.map((a)=> a.split(" ").map((b)=>parseInt(b)));
    console.log(list);
    let num = 0;
    let answer = 0;
    list.sort((a,b)=>{
        if(a[1]===b[1]){
        return a[0]-b[0];    
        }else{
        return a[1]-b[1];
        }});
        list.forEach((x)=> {if(x[0]>=num){
            answer++;
            num=x[1];
        }})
        return answer;
}
console.log(solve());
/*
언제 시작하든 끝나는 시간이 짧은게 가장 중요하기 때문에 끝나는 시간을 오름차순으로 정렬해서 돌린 후에
만약 같다면 시작하는 시간을 오름차순으로 해서 정렬시킨다.
그렇게 한 후에 num 변수에 초기값 0을 넣고 그것보다 시작하는 시간이 같거나 큰 회의를 찾고 끝나는 시간의 오름차순대로 정렬이 되어 있기 때문에 
지금 시작할 수 있는 회의 중에 가장 끝나는 시간이 빠른 회의를 찾게 된다
찾은 후에는 answer 변수에 회의의 수를 더하기 위해 1+를 하고 그 회의의 끝나는 시간을 num 변수에 넣어주는 걸 반복해서 배열의 모두 돌아보고 끝난다. 
*/