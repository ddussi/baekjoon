const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    let n = input[0]
    let k = input[1]
    let arr = [];
    const answer = [];
    for(let i = 0; i< n; i++){
        arr[i] = i+1;
    }
    while(arr.length>0){
        for(let i = 0; i<k-1; i++){
            arr.push(arr.shift());
        }
        answer.push(arr.shift());
    }
    return `<${answer.join(", ")}>`
} 
console.log(solve());

/*
    순서대로 k번째 사람을 제거하기 때문에 큐를 이용하여 인덱스[0]짜리를 shift push방식으로 뒤로 보내는 방법을 2회 한 후 [0]을 shift로 빼내는 방식으로 진행

    개선된 방법
    1. arr라는 1~n까지의 배열을 만들고, 인덱스 값을 찾기 위해 X = k-1을 적용
    2. while(배열의 길이)로 반복하고 splice를 이용해서 X번째 해당 배열 값을 제거한다. 
        이 때 배열의 길이가 넘어가지 않도록 X에 배열의 길이를 나누어 나머지 값을 X에 다시 넣고 시작한다.
        그리고 제거 한 후 다음 인덱스를 찾기 위해 X에 K-1을 더한다. (K가 아닌 이유는 이미 값을 제거한 배열이기 때문에 배열의 길이가 1이 줄기 때문이다.)
*/