const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let n = input[0]; // 수의 개수
    let list = input.slice(1).sort((a,b) => a-b ); //정수들을 빈도 수와 범위를 구하기 위해 정렬하여 배열에 저장
    const answer = []; // 답을 담아줄 배열
    let freq = {}; // 빈도 수를 위한 객체
    //산술평균
    let total = 0; // 산술평균을 구하기 위한 수들의 합 변수
    for(let i = 0; i< n ; i++){ // 수의 개수만큼 돌리고
        total += list[i]
        if(freq[list[i]]===undefined){
            freq[list[i]]= 1;
        }else{
            freq[list[i]] += 1;
        }
    }
    answer.push(Math.round(total/n)); //반올림 해주며 값을 저장
    // 중앙값
    if(n%2 === 0){ // 수의 개수가 짝수면
        answer.push((list[n/2+1]+list[n/2])/2)
    }else{ // 홀수면
        answer.push(list[(n-1)/2])
    }
    //최빈값
    let a = Math.max(...Object.values(freq));
    const arr = [];
    for(key in freq){
        if(freq[key]===a){
            arr.push(key);
        }
    }
    arr.sort((a,b) => a-b );
    if(arr.length>1){
        answer.push(arr[1]);
    }else{
        answer.push(arr[0]);
    }
    //범위
    answer.push(list[n-1]-list[0]) // 배열중 가장 작은 값과 큰 값을 빼서 계산
    return answer.join("\n");
} 
console.log(solve());