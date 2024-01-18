const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");
function solve() {
    let copy = input.slice();
    let answer = "";
    for (let i = 0; i < copy.length - 1; i++) {
        let arr = copy[i].split(" ").map(Number);
        if (arr[0] > arr[1]) {
            if (arr[2] > arr[0]) {
                sol(arr[0], arr[1], arr[2])
            } else {
                sol(arr[2], arr[1], arr[0])
            }
        } else {
            if (arr[2] > arr[1]) {
                sol(arr[0], arr[1], arr[2])
            } else {
                sol(arr[2], arr[0], arr[1])
            }
        }
    }
    return answer
    function sol(a, b, c) {
        if ((c * c) === (a * a + b * b)) {
            return answer += "right\n"
        } else {
            return answer += "wrong\n"
        }
    }
}
console.log(solve());
