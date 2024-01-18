const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function solve(){
    const list = input.slice(1);
    let max = list[0]; // 한개는 선택해야 함
    const num = [list[0]]; // i-1로 시작하기 위해 편의상
    for(let i=1; i<list.length ; i++){ // 0~lis.length-1까지로 구성해도 똑같을 듯
        if(num[i-1]>1){ //만약 이전까지의 수가 1이상라면 
            num[i]=num[i-1]*list[i]; // 계속 곱해줌
        }else{ //근데 이전까지의 수가 음수라면
            num[i]=list[i]; // 이전까지의 수를 곱하는게 손해기 때문에 그냥 곱하는 수부터로 초기화 시켜줌 
        }
    }
    max = Math.max(...num,max)// 모든 경우의 수중에 가장 큰 값 찾아줌
    return max.toFixed(3);
    }
console.log(solve());
