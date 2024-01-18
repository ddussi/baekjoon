const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
function answer(){
    let n = input[1];
    const list = input.slice(2);
    const arr = [];
    for(let i = 0 ; i<list.length ; i++){
        if(list[i]>n){
            arr.push(list[i]-n);
        }else{
            arr.push(n-list[i]);
        }
    }
    return arr.reduce((x,y)=> {
        let a = x;
    let b = y;
    let c;
    let gcd = 0; //최대공약수
    if (a >= b) {
        while(c!==0)
        {
            c = a%b;
            a = b;
            b = c;
        }
        gcd = a;
    }else{
        while(c!==0)
        {
            c = b%a;
            b = a;
            a = c;
        }
        gcd = b;
    }
        return gcd
    })
}
console.log(answer());

/*
유클리드 호제법을 사용하여
a,b가 주어졌을 때 (b>a)라면 b%a의 값인 c가 있다면 a와 b의 최대공약수는 b와 c의 최대공약수와 같기 때문에
모든 동생과의 거리의 차를 구한 후 reduce를 이용해서 최대공약수를 계속 연결
*/