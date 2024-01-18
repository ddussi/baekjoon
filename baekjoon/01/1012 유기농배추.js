const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'; 
let input = fs.readFileSync(filePath).toString().trim().split('\n');
function solve(input) {
    let idx = 0;
    let T = Number(input[idx++]);
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let result = [];

    while(T--) {
        let [M, N, K] = input[idx++].split(' ').map(Number);
        let field = Array.from(Array(N), () => Array(M).fill(0));
        let visited = Array.from(Array(N), () => Array(M).fill(false));
        let bugs = 0;

        for(let i = 0; i < K; i++) {
            let [X, Y] = input[idx++].split(' ').map(Number);
            field[Y][X] = 1;
        }

        for(let i = 0; i < N; i++) {
            for(let j = 0; j < M; j++) {
                if(field[i][j] === 1 && !visited[i][j]) {
                    dfs(i, j, field, visited);
                    bugs++;
                }
            }
        }

        result.push(bugs);
    }

    function dfs(x, y, field, visited) {
        if(visited[x][y]) return;
        visited[x][y] = true;

        for(let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if(nx >= 0 && nx < field.length && ny >= 0 && ny < field[0].length) {
                if(field[nx][ny] === 1 && !visited[nx][ny]) {
                    dfs(nx, ny, field, visited);
                }
            }
        }
    }

    return result.join('\n');
}

console.log(solve(input));
