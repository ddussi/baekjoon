const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy = input.slice();
let word = copy[0]
let arr = new Array(26).fill(-1)
for(let i = 0; i < word.length ; i++){
    if(arr[word.charCodeAt(i)-97]===-1){
        arr[word.charCodeAt(i)-97] = word.indexOf(word[i])
    }
}
let answer = arr.join(" ")
console.log(answer);