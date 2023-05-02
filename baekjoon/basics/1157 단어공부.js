const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
let copy = input.slice();
let word = copy[0].toUpperCase()
let answer = {};
for(let i = 0 ; i <copy[0].length; i++){
   answer[word[i]] === undefined ? answer[word[i]] = 1 : answer[word[i]] += parseInt(1);
}
function getKeyByValue(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
  }
let arrVal = Object.values(answer);
let keys = getKeyByValue(answer, Math.max(...arrVal))
console.log(keys.length > 1 ? "?" : keys[0]);