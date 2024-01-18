/* 방법 1
N과 K를 받아서 X에다 N-K를 하고(출력의 길이) K는 남은 제거 횟수라고 파악 list에는 입력되는 숫자들을 넣어줌
먼저 list중 앞에 있는 K개중에 가장 높은 수를 골라 arr에 넣기
그리고 그 인덱스를 받아서 앞에 있는 요소의 개수를 파악하고 해당 인덱스와 앞에 있는 그 요소들을 list에서 제거하며 k에 갯수만큼 빼줌
이 것을 반복하다가 arr의 길이가 X가 되면 arr를 출력.  

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve() {
    let num = input[0]-input[1];
    let chance = input[1];
    let list = input.pop().toString();
    let arr=[];
    while(arr.length<num){
        let x = list[0];
        for(let i = 1 ; i < chance+1 ; i++){
            if (x<list[i]){
                x = list[i];
            }
        }
        let maxIndex= list.indexOf(x);
        arr.push(list[maxIndex]);
        chance -= maxIndex;
        list = list.substring(maxIndex+1);
    }
    arr = arr.join("");
    return arr;
}

console.log(solve())

=== 시간 초과 뜸
*/

/* 방법 2
배열을 만들어서 스택을 만든 뒤에
입력을 받은 숫자의 가장 왼쪽부터 순서대로 집어 넣으면서 스택에 넣을 때 스택의 최상단 숫자보다 들어가는 숫자가 더 클때 pop()을 해주고 제거 횟수도 1 차감함
다 넣었는데 제거회수가 남았다면 스택을 제거횟수만큼 pop() 시켜서 길이를 맞춤
*/
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(BigInt);
function solve() {
    let num = input[0];
    let chance = input[1];
    let list = input[2].toString();
    let arr=[];
    let answer;
    for(let i = 0;i<num;i++){
        while(arr.length>0&&(arr[arr.length-1] < list[i])&&chance>0){
            arr.pop();
            chance -= 1n;
        }
        arr.push(list[i])
    }
    if(chance > 0){
        for(let i = 0; i<chance ; i++){
            arr.pop();
        }
    }
    answer = arr.join("");
    return answer;
}

console.log(solve())
/*
결국 2번 로직의 방법은 맞았지만 map을 Number가 아니라 BigInt으로 돌려야 하는 것 때문에 계속 실패가 떴다 앞으로는 범위를 잘 살펴봐야겠다.
*/
