const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
const arr = [];
const newArr = [];
for (let i = Number(input[0]); i >= 1; i--) {
    arr.push(i);
}
let x=0;
if(arr.length===1){
    console.log(arr[0]);
}else{
    function solve(num) {
        if(arr.length===1){
            return console.log(arr[0]);
        }
        for(let i = 0; i<num ; i++){
            if(x%2===1){
                newArr.push(arr.pop());
                x++;
            }else{
                arr.pop();
                x++;
            }
        }
        let n = newArr.length;
        for(let i = 0; i<n ; i++){
            arr.push(newArr.pop());
        }
        if(arr.length>1){
            solve(arr.length);
        }else{
            console.log(arr[0]);
        }
    }
    solve(arr.length);
}