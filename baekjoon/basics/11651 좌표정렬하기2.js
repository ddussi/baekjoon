const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    const list = input.slice(1).map(x=> x.split(" "));
    const newList = list.sort((x,y) => x[0]-y[0]).sort((x,y) => x[1]-y[1])
    const answer = newList.map(x=>x.join(" "))
    return answer.join("\n")
}
console.log(solve());
