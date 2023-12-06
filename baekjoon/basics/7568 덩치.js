const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map(e => e.split(' ').map(Number));

function solve() {
    const people = input.slice(1);
    const ranks = Array.from({length: people.length}, () => 1);

    for(let i=0; i<people.length; i++){
        for(let j=0; j<people.length; j++){
            if(i===j) continue;
            if(people[i][0]<people[j][0] && people[i][1]<people[j][1]){
                ranks[i]++;
            }
        }
    }
    return ranks.join(' ');
}

console.log(solve());