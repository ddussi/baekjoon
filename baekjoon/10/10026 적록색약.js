const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const N = Number(input[0]);
    const picture = input.slice(1).map(line => line.split(''));

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    let normal = 0;
    let colorWeakness = 0;

    const visitedNormal = Array.from(Array(N), () => Array(N).fill(false));
    const visitedColorWeakness = Array.from(Array(N), () => Array(N).fill(false));

    function dfs(x, y, area, isColorWeakness) {
        const visited = isColorWeakness ? visitedColorWeakness : visitedNormal;

        visited[x][y] = true;

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
                if (!visited[nx][ny]) {
                    if (isColorWeakness) {
                        if ((area === 'R' || area === 'G') && (picture[nx][ny] === 'R' || picture[nx][ny] === 'G')) {
                            dfs(nx, ny, area, isColorWeakness);
                        } else if (area === picture[nx][ny]) {
                            dfs(nx, ny, area, isColorWeakness);
                        }
                    } else {
                        if (area === picture[nx][ny]) {
                            dfs(nx, ny, area, isColorWeakness);
                        }
                    }
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visitedNormal[i][j]) {
                dfs(i, j, picture[i][j], false);
                normal++;
            }
            if (!visitedColorWeakness[i][j]) {
                dfs(i, j, picture[i][j], true);
                colorWeakness++;
            }
        }
    }

    return `${normal} ${colorWeakness}`;
}

console.log(solve());