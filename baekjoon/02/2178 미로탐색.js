const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let map = input.slice(1).map(line => line.split('').map(Number));

function solve() {
  let visited = Array.from(Array(N), () => new Array(M).fill(false));
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  function bfs(x, y) {
    let queue = [];
    queue.push([x, y]);
    while(queue.length) {
      [x, y] = queue.shift();
      for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if(map[nx][ny] == 0) continue;
        if(map[nx][ny] == 1 && !visited[nx][ny]) {
          map[nx][ny] = map[x][y] + 1;
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
  bfs(0, 0);
  return map[N-1][M-1];
}

console.log(solve());