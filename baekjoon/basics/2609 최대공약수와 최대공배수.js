const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    let a = input[0];
    let b = input[1];
    let c;
    let gcd = 0; //최대공약수
    let lcm = 0; //최소공배수
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
    lcm = input[0]*input[1]/gcd;
    return gcd + "\n" + lcm;
} 
console.log(solve());

/*
    유클리드 호제법을 사용하여
    a,b가 주어졌을 때 (b>a)라면 b%a의 값인 c가 있다면 a와 b의 최대공약수는 b와 c의 최대공약수와 같기 때문에
    반복해서 나머지를 구해준 후에 나머지가 0일때 나눈 값를 구하면 그 것이 최소 공배수가 되고
    최대 공약수는 간단하게 a*b를 한 후 a,b의 최소 공배수로 나누면 된다.
*/