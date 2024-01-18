const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solve() {
    const N = Number(input[0]);
    const numbers = Array.from({ length: N }, (_, i) => i + 1);
    const permutations = [];
    function permute(arr, m = []) {
        if (arr.length === 0) {
            permutations.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }
    permute(numbers);
    permutations.sort();
    return permutations.map(p => p.join(' ')).join('\n');
}

console.log(solve());