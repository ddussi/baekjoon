const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(Number);
let copy = input.slice();
let hour = copy[0];
let min = copy[1];
if(min-45 >= 0){
    console.log(`${hour} ${min-45}`)
}else if(hour === 0){
    console.log(`23 ${min+15}`);
}else{
    console.log(`${hour-1} ${min+15}`);
}
