const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(x=>x.split(" ").map(Number));
function solve() {
        const N = input[0][0];
        const graph = input.slice(1);
        for(let k=0; k<N; k++){
            for(let i=0; i<N; i++){
                for(let j=0; j<N; j++){
                    if(graph[i][k] === 1 && graph[k][j] === 1){
                        graph[i][j] = 1;
                    }
                }
            }
        }
        return graph.map((row) => row.join(' ')).join("\n");
}
console.log(solve());
