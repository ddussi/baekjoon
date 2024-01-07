const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solve() {
    const MAX = 100001;
    const dist = Array(MAX).fill(-1);
    const queue = [];

    const [N, K] = input;
    queue.push(N);
    dist[N] = 0;

    while (queue.length) {
        const now = queue.shift();

        if (now === K) {
            return dist[K];
        }

        if (now * 2 < MAX && dist[now * 2] === -1) {
            queue.unshift(now * 2);
            dist[now * 2] = dist[now];
        }

        if (now - 1 >= 0 && dist[now - 1] === -1) {
            queue.push(now - 1);
            dist[now - 1] = dist[now] + 1;
        }

        if (now + 1 < MAX && dist[now + 1] === -1) {
            queue.push(now + 1);
            dist[now + 1] = dist[now] + 1;
        }
    }
}

console.log(solve());