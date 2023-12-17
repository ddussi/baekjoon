const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solve(input) {
    let N = Number(input[0]);
    let students = [];

    for(let i = 1; i <= N; i++) {
        let [name, kor, eng, math] = input[i].split(' ');
        students.push({
            name,
            kor: Number(kor),
            eng: Number(eng),
            math: Number(math)
        });
    }

    students.sort((a, b) => {
        if(a.kor !== b.kor) return b.kor - a.kor;
        if(a.eng !== b.eng) return a.eng - b.eng;
        if(a.math !== b.math) return b.math - a.math;
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    return students.map(student => student.name).join('\n');
}

console.log(solve(input));