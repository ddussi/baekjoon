const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const xlist = input.slice(1).map((a)=> a.split(" ").map(Number));
    const ylist = xlist.slice();
    const xAsnwer = [];
    const yAsnwer = [];
    xlist.sort((a,b)=> a[0]-b[0]);
    for(let i = 1; i<xlist.length ; i++){
        if(xlist[i][0]===xlist[i-1][0]&&!xAsnwer.includes(xlist[i-1][0])){
           xAsnwer.push(xlist[i][0]);
        }else{

        }
    }
    ylist.sort((a,b)=> a[1]-b[1]);
    for(let i = 1; i<ylist.length ; i++){
        if(ylist[i][1]===ylist[i-1][1]&&!yAsnwer.includes(ylist[i-1][1])){
            yAsnwer.push(ylist[i][1]);
        }else{
            
        }
    }
    return xAsnwer.length+yAsnwer.length;
}
console.log(solve());

/* 
x축과 y축의 평행한 직선을 얻어야하므로 어느 두 점이 x가 같을 때 y가 같을 때 혹은 x,y가 둘다 같을 때로 구분하여 조건을 만들고
만약 둘다 같을 땐 해당 x좌표의 직선과 y좌표의 직선을 둘 다 거진다고 생각하며
x가 같을 댄 x좌표의 직선, y가 같을 땐 y좌표의 직선을 가진다고 생각한다.
이 때 만약 이미 같은 좌표의 직선이 존재한다면 그것은 동일한 직선으로 생각하고 카운트하지 않는다
이러한 중복 처리를 위해 배열을 x직선배열 y직선배열을 따로 만들어서 중복체크후 집어넣는다.
*/