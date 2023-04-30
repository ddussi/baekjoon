const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/)
let copy_input = input.slice();
let num = copy_input.length
if(copy_input[0]===""){
    console.log("0")
}else{
    console.log(num);
}
