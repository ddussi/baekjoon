const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {  
    const [w , h] = input[0].split(" ")
    const list = input.slice(2).map(x=>x.split(" "));
    const warr = [0,w];
    const harr = [0,h];
    for(let i = 0 ; i< list.length ; i++){
        if(list[i][0]==="0"){
            harr.push(list[i][1]);
        }else{
            warr.push(list[i][1]);
        }
    }
    let newHlist = harr.map(Number).sort((x,y)=>x-y)
    let newWlist = warr.map(Number).sort((x,y)=>x-y)
    let diffHlist = [];
    let diffWlist = [];
    for (let i = 1; i < newHlist.length; i++) {
        diffHlist.push(newHlist[i] - newHlist[i - 1]);
    }
    for (let i = 1; i < newWlist.length; i++) {
        diffWlist.push(newWlist[i] - newWlist[i - 1]);
    }
    return Math.max(...diffHlist)*Math.max(...diffWlist)

}
console.log(solve());
