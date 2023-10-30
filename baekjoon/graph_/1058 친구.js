const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(/\s/);
function solve() {
    const list = input.slice(1).map(x => x.split(""));
    const obj = {};
    // 생성된 그래프를 표현하는 인접 리스트를 작성
    for (let i = 0; i < list.length; i++) {
        obj[i] = [];
        for (let j = 0; j < list[i].length; j++) {
            if (list[i][j] === "Y") {
                obj[i].push(j);
            }
        }
    }
    const maxFriends = [];
    // 각 노드에서 DFS를 호출하여 친구의 수를 계산
    for (let i = 0; i < list.length; i++) {
        let friends = new Set();
        for (const friend of obj[i]) {
            friends.add(friend);
            for (const friendOfFriend of obj[friend]) {
                if (friendOfFriend !== i) {
                    friends.add(friendOfFriend);
                }
            }
        }
        maxFriends[i] = friends.size;
    }
    return Math.max(...maxFriends);
}

console.log(solve());