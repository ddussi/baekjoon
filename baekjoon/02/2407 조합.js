const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split(/\s/).map(BigInt);

function solve() {
    let [n, m] = input.slice();
    let dp = Array.from({ length: 101 }, () => Array(101).fill(BigInt(0)));

    function combination(n, r) {
        if (dp[n][r] !== BigInt(0)) return dp[n][r];
        if (n === r || r === BigInt(0)) return dp[n][r] = BigInt(1);
        return dp[n][r] = combination(n - BigInt(1), r - BigInt(1)) + combination(n - BigInt(1), r);
    }

    return combination(n, m).toString();
}

console.log(solve());