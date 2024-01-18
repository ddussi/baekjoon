const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
   const [vertex, edge, start] = input[0].split(" ").map(Number);
   const graph = new Array(vertex+1).fill().map(()=>[]);
   const list = input.slice(1).map(x=>x.split(" ").map(Number));
   list.forEach(([x, y]) => { // 연결된 간선이 있다면 해당 인덱스에 보여줌
      graph[x].push(y);
      graph[y].push(x);
    });
   let answer = '';

   const dfs = (start) => { 
      const stack = [start];
      const visited = Array(vertex + 1).fill(false); // 해당 숫자가 방문했는지 체크하는 배열
      const order = [];
      while (stack.length) {
        const node = stack.pop();
        if (!visited[node]) { //방문하지 않았으면
          visited[node] = true; // 체크하고
          order.push(node);// 값을 넣어주고
          stack.push(...graph[node]); 
        }
      }
      return order.join(' ');
    };
    const bfs = (start) => {
      const queue = [start];
      const visited = Array(vertex + 1).fill(false); // 해당 숫자가 방문했는지 체크하는 배열
      const order = [];
      while (queue.length) {
        const node = queue.shift();
        if (!visited[node]) { //방문하지 않았으면
          visited[node] = true; // 체크하고
          order.push(node); // 값을 넣어주고
          queue.push(...graph[node]);
        }
      }
      return order.join(' ');
    };
    graph.forEach(x => x.sort((a, b) => b - a)); // 스택을 이용해서 pop을 해야 하기 때문에 내림차순으로 낮은 숫자부터 뺌
    console.log(dfs(start));
    graph.forEach(x => x.sort((a, b) => a - b)); // 큐를 이용해서 shift를 해야 하기 때문에 오름차순으로 낮은 숫자부터 뺌
    console.log(bfs(start));

}
solve();