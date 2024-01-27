const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input[0].split(' ').map(Number);
let nums = input[1].split(' ').map(Number).sort((a, b) => a - b);
let output = [];
let visited = Array(N).fill(false);

function dfs(count, result) {
    if (count === M) {
        output.push(result);
        return;
    }
    for (let i = 0; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        dfs(count + 1, [...result, nums[i]]);
        visited[i] = false;
    }
}

dfs(0, []);
console.log(output.map(v => v.join(' ')).join('\n'));